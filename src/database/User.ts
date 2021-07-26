import { Schema, Document } from 'mongoose';

import { IUser } from './models/iuser';

export const userSchema = new Schema<IUser & Document>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});



