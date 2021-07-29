import { Comment, User } from '../persistence';
import { Comment as CommentContract, CreateComment } from '../domain-contracts';

export async function getComments(): Promise<CommentContract[]> {
    const comments = await Comment.find();

    return comments.map((c) => ({
        id: c._id,
        name: c.name,
        movie_id: String(c.movie_id),
        text: c.text,
        date: c.date,
        email: c.email
    } as CommentContract))
}

export async function getCommentsByEmail(email: string): Promise<CommentContract[]> {
    const comments = await Comment.find({ email: email});

    return comments.map((c) => ({
        id: c._id,
        name: c.name,
        movie_id: String(c.movie_id),
        text: c.text,
        date: c.date,
        email: c.email
    } as CommentContract))
}

export async function addComment(comment: CreateComment): Promise<CommentContract> {
    const user = await User.findOne({ email: comment.email });
    const commentModel = {
        ...comment,
        name: user?.name,
        date: Date.now().toString()
    };

    const addedComment = await Comment.create(commentModel);

    return {
        id: addedComment.id,
        name: addedComment.name,
        email: addedComment.email,
        text: addedComment.text,
        date: addedComment.date,
        movie_id: addedComment.movie_id.toString()
    };    
}