import { User } from '../database/connection';
import { IUserModel } from '../routes/user/models';

export async function getUsers(): Promise<IUserModel[]> {
    const users = await User.find();

    const mappedUsers = users.map((u) => {
        return { 
            id: u.id,
            name: u.name, 
            email: u.email
        } as IUserModel;
    });   

    return mappedUsers;
}

export async function getUser(id: string): Promise<IUserModel | null> {
    const u = await User.findById(id);

    if(u) {
        const mappedUser = { 
            id: u.id,
            name: u.name, 
            email: u.email
        } as IUserModel;

        return mappedUser;
    }

    return null;
}
