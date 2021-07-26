import { createConnection, Document } from 'mongoose';

import { DB_CONNECTION } from '../config';
import { IUser } from './models/iuser';
import { userSchema } from './user';

function makeDbConnection(connectionString: string) {
    const dbConnection = createConnection(connectionString, 
        { useNewUrlParser: true, useUnifiedTopology: true });

    dbConnection.on('error', (error) => console.error(error));
    dbConnection.once('open', () => console.log('Connected to database'));

    const User = dbConnection.model<IUser & Document>('user', userSchema, 'users');

    return { User };
}

const { User } = makeDbConnection(DB_CONNECTION);

export { User }
