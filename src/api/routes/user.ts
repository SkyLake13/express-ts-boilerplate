import express, { Request, Response, NextFunction } from 'express';

import { failure, success } from './utils';
import { userService, redisClient } from '../../providers';

const USERS_KEY = 'USERS';

const router = express.Router();

router.get('/', usersCache, async (_req, res, next) => {
    try {
        const users = await userService.getUsers();
        success(res, users);
    } catch(err) {
        next(err);
    }
});

router.get('/:id', async (req, res) => {
    const id = req.params['id'];

    const user = await userService.getUser(id);
    if(user) {
        return success(res, user);
    }

    return failure(res, 'User not found.', 404);
});

export default router;

async function usersCache(req: Request, res: Response, next: NextFunction) {
    const users = await redisClient.get(USERS_KEY);

    if(users) {
        const u = JSON.parse(users);
        success(res, u);
    } else {
        next();
    }
}