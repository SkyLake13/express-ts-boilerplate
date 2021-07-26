import express from 'express';
import { getUser, getUsers } from '../services/user.service';
// import { authorize } from '../middlewares/authorize';

const user = express.Router();
// userManager.use(authorize)

user.get('/', async (_req, res) => {
    const users = await getUsers();

    res.status(200).send(users);
});

user.get('/:id', async (req, res) => {
    const id = req.params['id'];

    const user = await getUser(id);
    if(user) {
        res.status(200).send(user);
        return;
    }

    res.status(404).send('User not found.');
});

export default user;