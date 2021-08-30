import { createConnection } from 'mongoose';
import { logger } from '../providers';

export function makeDbConnection(connectionString: string) {
    const dbConnection = createConnection(connectionString, 
        { useNewUrlParser: true, useUnifiedTopology: true });

    dbConnection.on('error', (error) => logger.error(error));
    dbConnection.once('open', () => logger.info('Connected to database'));

    return dbConnection;
}
