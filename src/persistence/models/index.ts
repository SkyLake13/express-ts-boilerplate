import { Document } from 'mongoose';
import { IComment } from './IComment';

import { IUser } from "./iuser";

export type UserModel = IUser & Document;
export type CommentModel = IComment & Document;