import express from 'express';
import { success } from './utils';
import { CommentDto } from '../contracts';
import { commentService, messageBus } from '../../providers';

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const email = req.query['email']?.toString();
        if(email) {
            const comments = await commentService.getCommentsByEmail(email);
            return success(res, comments, 200);
        }

        const comments = await commentService.getComments();
        return success(res, comments, 200);
    } catch(err) {
        return next(err);
    }
});

router.post('/', async (req, res, next) => {
    try {
        const commentDto = req.body as CommentDto;
        const comment = new CommandEvent(commentDto.email, commentDto.text, commentDto.movie_id);
        (await messageBus).publish(comment);
    
        return success(res, '', 200);
    } catch(err) {
        return next(err);
    }
});

export class CommandEvent {
    constructor(public email: string, public text: string, public movie_id: string) {}
}

export default router;