import express from 'express';
import { getUser, getUsers } from '../../services/user.service';
import { failure, success } from '../utils';
// import { authorize } from '../middlewares/authorize';

const user = express.Router();
// userManager.use(authorize)

user.get('/', async (_req, res, next) => {
    try {
        const users = await getUsers();        
        success(res, users);
    } catch(err) {
        next(err);
    }
});

user.get('/:id', async (req, res) => {
    const id = req.params['id'];

    const user = await getUser(id);
    if(user) {
        return success(res, user);
    }

    return failure(res, 'User not found.', 404);
});

export default user;