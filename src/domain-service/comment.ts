import { Comment, User } from '../persistence';
import { Comment as CommentModel, CreateComment } from '../domain-contracts';

export async function getComments(movie_id?: string): Promise<CommentModel[]> {
    const query = { 'movie_id': movie_id };
    const comments = movie_id ? await Comment.find(query) : await Comment.find();

    return comments.map((c: any) => ({
        id: c._id,
        name: c.name,
        movie_id: c.movie_id,
        text: c.text,
        date: c.date
    } as CommentModel))
}

export async function addComment(comment: CreateComment): Promise<CommentModel> {
    const user = await User.findOne({ email: comment.email });
    const commentModel = {
        ...comment,
        name: user?.name,
        date: Date.now
    };

    const addedComment = await Comment.create(commentModel);

    return addedComment;    
}