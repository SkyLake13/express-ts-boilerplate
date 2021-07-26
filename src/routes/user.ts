import express from 'express';
// import { authorize } from '../middlewares/authorize';
import { User } from '../database/Connection';
import { IUser } from '../database/User';

interface IBasicUser {
    id: string; name: string; email: string
}

const user = express.Router();
// userManager.use(authorize)

user.get('/', (_req, res) => {
    User.find().then((_users: IUser[]) => {
        const users = _users.map((u) => {
            return { 
                id: u.id,
                name: u.name, 
                email: u.email
            } as IBasicUser;
        });

        res.status(200).send(users);
    })
    .catch((err) => res.status(500).send(err));
});

user.get('/:id', (req, res) => {
    const id = req.params['id'];

    User.findById(id).then((u: IUser | null) => {
        if(u) {
            const users =  {
                id: u.id,
                name: u.name, 
                email: u.email
            } as IBasicUser;

            return res.status(200).send(users);
        }

        return res.status(404).send('Not found');
    })
    .catch((err) => res.status(500).send(err));
});

export default user;