import { createConnection } from 'mongoose';

import { DB_CONNECTION } from '../config';
import { CommentModel, MovieModel, UserModel } from './models';
import { commentSchema } from './schemas/comment';
import { userSchema } from './schemas/user';
import { movieSchema } from './schemas/movie';

function makeDbConnection(connectionString: string) {
    const dbConnection = createConnection(connectionString, 
        { useNewUrlParser: true, useUnifiedTopology: true });

    dbConnection.on('error', (error) => console.error(error));
    dbConnection.once('open', () => console.log('Connected to database'));

    const User = dbConnection.model<UserModel>('user', userSchema, 'users');
    const Comment = dbConnection.model<CommentModel>('comment', commentSchema, 'comments');
    const Movie = dbConnection.model<MovieModel>('movie', movieSchema, 'movies');

    return { User, Comment, Movie };
}

const { User, Comment, Movie } = makeDbConnection(DB_CONNECTION);

export { User, Comment, Movie }
