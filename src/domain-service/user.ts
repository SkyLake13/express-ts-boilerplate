import { User } from '../persistence';
import { User as UserModel } from '../domain-contracts';

export async function getUsers(): Promise<UserModel[]> {
    const users = await User.find();

    const mappedUsers = users.map((u) => {
        return { 
            id: u.id,
            name: u.name, 
            email: u.email
        } as UserModel;
    });   

    return mappedUsers;
}

export async function getUser(id: string): Promise<UserModel | null> {
    const u = await User.findById(id);

    if(u) {
        const mappedUser = { 
            id: u.id,
            name: u.name, 
            email: u.email
        } as UserModel;

        return mappedUser;
    }

    return null;
}
