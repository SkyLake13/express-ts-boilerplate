import http from 'http';
import https from 'https';
import fs from 'fs';
import { Express } from 'express';

import app from './app';
import { IS_PRODUCTION, PORT, SECURE_SERVER_CERT, SECURE_SERVER_KEY } from '../configurations';
import { logger } from '../providers';

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

export function run() {
    let server;

    if (IS_PRODUCTION) {
        server = createHttpsServer(app);
    } else {
        server = createHttpServer(app);
    }

    return server.listen(PORT, () => {
        logger.info(`Server is listening at port ${PORT}`);
    });
}





