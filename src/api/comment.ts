import express from 'express';
import { NewComment } from '../api-contracts';
import { addComment, getComments } from '../domain-service';
import { success } from './utils';

const comment = express.Router();

comment.get('/', async (req, res, next) => {
    try {
        const comments = await getComments();
        success(res, comments, 200);
    } catch(err) {
        next(err);
    }
});

comment.get('/:movie_id', async (req, res, next) => {
    const movie_id = req.params['movie_id'];
    try {
        const comments = await getComments(movie_id);
        success(res, comments, 200);
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