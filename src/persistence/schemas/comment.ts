import { Schema } from 'mongoose';
import { CommentModel } from '../models';

export const commentSchema = new Schema<CommentModel>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    movie_id: {
        type: Schema.Types.ObjectId,
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date
    }
});