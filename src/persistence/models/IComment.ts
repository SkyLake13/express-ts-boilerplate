import { Schema } from "mongoose";

export interface IComment {
    id: string;
    name: string;
    email: string;
    movie_id: Schema.Types.ObjectId;
    text: string;
    date: Date;
}