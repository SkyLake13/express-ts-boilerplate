import { User } from '../database/connection';

interface IBasicUser {
    id: string; name: string; email: string
}

export async function getUsers(): Promise<IBasicUser[]> {
    const users = await User.find();

    const mappedUsers = users.map((u) => {
        return { 
            id: u.id,
            name: u.name, 
            email: u.email
        } as IBasicUser;
    });

    return mappedUsers;
}

export async function getUser(id: string): Promise<IBasicUser | null> {
    const u = await User.findById(id);

    if(u) {
        const mappedUser = { 
            id: u.id,
            name: u.name, 
            email: u.email
        } as IBasicUser;

        return mappedUser;
    }

    return null;
}