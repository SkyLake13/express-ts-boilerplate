import express from 'express';
import { NewComment } from '../api-contracts';
import { addComment, getComments, getCommentsByEmail } from '../domain-service';
import { success } from './utils';

const comment = express.Router();

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
        let _comment = {
            ...commentDto
        };
        _comment= await addComment(_comment);
    
        success(res, _comment, 200);
    } catch(err) {
        next(err);
    }
});

export { comment };