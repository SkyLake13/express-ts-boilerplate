import { Document } from 'mongoose';

import { IComment } from './IComment';
import { IUser } from "./IUser";
import { IMovie } from './IMovie';

export type UserModel = IUser & Document;
export type CommentModel = IComment & Document;
export type MovieModel = IMovie & Document;