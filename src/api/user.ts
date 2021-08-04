import express, { Request, Response, NextFunction } from 'express';

import { getUser, getUsers } from '../domain-service';
import { failure, success } from './utils';
import { redisClient } from '../redis';

const USERS_KEY = 'USERS';

const user = express.Router();

user.get('/', usersCache, async (_req, res, next) => {
    try {
        const users = await getUsers();
        await redisClient.set(USERS_KEY, JSON.stringify(users));

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

export { user };

async function usersCache(req: Request, res: Response, next: NextFunction) {
    const users = await redisClient.get(USERS_KEY);

    if(users) {
        const u = JSON.parse(users);
        success(res, u);
    } else {
        next();
    }
}