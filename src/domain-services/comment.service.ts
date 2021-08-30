import { Model } from 'mongoose';
import { CommentEntity } from '../persistence/entities';

type NewComment = Omit<CommentEntity, 'name' | 'date'>;

export class CommentService {
    constructor(private readonly comment: Model<CommentEntity>) { }

    public async getComments() {
        const comments = await this.comment.find().limit(100);
    
        return comments;
    }


    public async getCommentsByEmail(email: string) {
        const comments = await this.comment.find({ email: email});
    
        return comments;
    }

    public async addComment(newComment: NewComment) {
        return await this.comment.create(newComment);
    }
}
