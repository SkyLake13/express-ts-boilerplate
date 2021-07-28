import { Schema } from 'mongoose';
import { UserModel } from '../models';

export const userSchema = new Schema<UserModel>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        // unique: true,
        required: true,
        validate: [ () => true, 'invalid email' ]
    },
    password: {
        type: String,
        required: true
    }
});



