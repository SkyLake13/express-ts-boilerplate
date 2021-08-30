import { createConnection } from 'mongoose';

export function makeDbConnection(connectionString: string) {
    const dbConnection = createConnection(connectionString, 
        { useNewUrlParser: true, useUnifiedTopology: true });

    dbConnection.on('error', (error) => console.error(error));
    dbConnection.once('open', () => console.log('Connected to database'));

    return dbConnection;
}
