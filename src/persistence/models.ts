import { makeDbConnection } from './connection';

import { commentSchema } from './schemas/comment';
import { userSchema } from './schemas/user';
import { movieSchema } from './schemas/movie';
import { CommentEntity, MovieEntity, UserEntity } from './entities';

export function models(connectionString: string) {
    const connection = makeDbConnection(connectionString);

    const User = connection.model<UserEntity>('user', userSchema);
    const Comment = connection.model<CommentEntity>('comment', commentSchema);
    const Movie = connection.model<MovieEntity>('movie', movieSchema);

    return { User, Comment, Movie };
}
