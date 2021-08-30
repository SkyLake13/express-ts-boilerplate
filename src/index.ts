import { run } from "./api";
import { registerHandlers } from "./handlers";
import { logger } from "./providers";

process.on('uncaughtException', err => {
    logger.error('There was an uncaught exception');
    logger.error(err);
    process.exit(1);
});

process.on('unhandledRejection', err => {
    logger.error('There was an unhandled rejection');
    logger.error(err);
    process.exit(1);
});

const server = run(); // start the application
registerHandlers();

process.on('SIGTERM', () => {
    server.close(() => {
        logger.info('Process terminated.');
    });
});