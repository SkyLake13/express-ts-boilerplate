import { run } from "./api";
import { registerHandlers } from "./handlers";

process.on('uncaughtException', err => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});

process.on('unhandledRejection', err => {
    console.error('There was an uncaught error', err);
    process.exit(1);
});

const server = run(); // start the application
registerHandlers();

process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Process terminated.');
    });
});