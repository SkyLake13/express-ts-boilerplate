import { subscribe } from '../amqp';
import { CommandEvent } from '../api/comment';
import { addComment } from '../domain-service';

export const subs = () => subscribe('CommandEvent', async (command: CommandEvent) => {
    let _comment = {
            ...command
    };

    _comment= await addComment(_comment);
});