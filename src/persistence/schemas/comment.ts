import { Schema } from 'mongoose';
import { CommentEntity } from '../entities';

export const commentSchema = new Schema<CommentEntity>({
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
        ref: 'movie',
        required: true,
    },
    text: {
        type: String,
        required: true,
    },
    date: {
        type: Date
    }
},
{
    timestamps: true
});