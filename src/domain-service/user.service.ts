import { Model } from "mongoose";
import { UserEntity } from "../persistence/entities";

export class UserService {
    constructor(private readonly user: Model<UserEntity>) { }

    async getUsers() {
        const users = await this.user.find();
    
        return users;
    }

    async getUser(id: string) {
        const user = await this.user.findById(id);
    
        return user;
    }
}

