import { messageBus } from '../providers/message-bus.provider';
import { commentService } from '../providers';
import { CommandEvent } from '../api/routes/comment';


export async function commentCommandHandler() {
    const amqp =  await messageBus;

    amqp.subscribe('CommandEvent', async (command: CommandEvent) => {
        let _comment = {
                ...command
        };
    
        _comment= await commentService.addComment(_comment);
    })
}
