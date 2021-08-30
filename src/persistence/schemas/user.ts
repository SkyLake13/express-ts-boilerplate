import { Schema } from 'mongoose';
import { UserEntity } from '../entities';

export const userSchema = new Schema<UserEntity>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        lowercase: true,
        unique: true,
        required: true,
        validate: [ () => true, 'invalid email' ]
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});



