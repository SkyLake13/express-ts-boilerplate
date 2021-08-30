import http from 'http';
import https from 'https';
import fs from 'fs';
import { Express } from 'express';

import { app } from './app';
import { IS_PRODUCTION, PORT, SECURE_SERVER_CERT, SECURE_SERVER_KEY } from './config';

const buildServerOptions = (): https.ServerOptions => {
    const key = fs.readFileSync(SECURE_SERVER_KEY);
    const cert = fs.readFileSync(SECURE_SERVER_CERT);

    return {
        key, cert
    };
}

const createHttpServer = (app: Express) => {
    return http.createServer(app);
}

const createHttpsServer = (app: Express) => {
    const options = buildServerOptions();

    return https.createServer(options, app)
}

const run = () => {
    let server;

    if (IS_PRODUCTION) {
        server = createHttpsServer(app);
    } else {
        server = createHttpServer(app);
    }

    return server.listen(PORT, () => {
        console.log(`Server is listening at port ${PORT}`);
    });
}

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});

process.on('unhandledRejection', err => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});

const server = run(); // start the application

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated.');
    });
});




