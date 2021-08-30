import express from 'express';
import { publish } from '../amqp';
import { NewComment } from '../api-contracts';
import { getComments, getCommentsByEmail } from '../domain-service';
import { failure, success } from './utils';

const movie = express.Router();

movie.get('/', async (req, res, next) => {
    try {
        const comments = await getComments();
        return success(res, comments, 200);
    } catch(err) {
        return next(err);
    }
});

movie.get('/:id', async (req, res, next) => {
    try {
        const id = req.params['id']?.toString();
        if(id) {
            const movie = await getCommentsByEmail(id);
            return success(res, movie, 200);
        }
        failure(res, 'Not found', 404);
    } catch(err) {
        return next(err);
    }
});

movie.post('/', async (req, res, next) => {
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

export { movie as comment };