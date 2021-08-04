import express from 'express';
import { publish } from '../amqp';
import { NewComment } from '../api-contracts';
import { subs } from '../application/comment';
import { getComments, getCommentsByEmail } from '../domain-service';
import { success } from './utils';

const comment = express.Router();

subs().then();

comment.get('/', async (req, res, next) => {
    try {
        const email = req.query['email']?.toString();
        if(email) {
            const comments = await getCommentsByEmail(email);
            success(res, comments, 200);
        } else {
            const comments = await getComments();
            success(res, comments, 200);
        }
    } catch(err) {
        next(err);
    }
});

comment.post('/', async (req, res, next) => {
    try {
        const commentDto = req.body as NewComment;
        const comment = new CommandEvent(commentDto.email, commentDto.text, commentDto.movie_id);
        publish(comment);
    
        success(res, '', 200);
    } catch(err) {
        next(err);
    }
});

export class CommandEvent {
    constructor(public email: string, public text: string, public movie_id: string) {}
}

export { comment };