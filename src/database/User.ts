import { Schema, Document } from 'mongoose';

export const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

export interface IUser extends Document {
    id: string;
    name: string;
    email: string;
    password: string;
}

