import { createConnection } from 'mongoose';
import { IUser, userSchema } from './User';

const connectionString = (process.env as any).DB_CONNECTION_STRING;
const dbConnection = createConnection(connectionString, 
                        { useNewUrlParser: true, useUnifiedTopology: true });

dbConnection.on('error', (error) => console.error(error));
dbConnection.once('open', () => console.log('Connected to database'));

const User = dbConnection.model<IUser>('user', userSchema, 'users');

export { User };