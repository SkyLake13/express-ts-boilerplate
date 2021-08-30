import { messageBus } from '../providers/message-bus.provider';
import { commentService } from '../providers';
import { CreateCommentCommand } from '../handler-contracts';


export async function commentCommandHandler() {
    const amqp =  await messageBus;

    amqp.subscribe(CreateCommentCommand.commandName, async (command: CreateCommentCommand) => {
        let _comment = {
                ...command
        };
    
        _comment= await commentService.addComment(_comment);
    })
}
