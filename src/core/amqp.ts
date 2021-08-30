import { connect, Connection, ConsumeMessage } from 'amqplib';

export class Amqp {
    private connection: Connection | undefined;

    public async connect(amqpUrl: string) {
        this.connection = await connect(amqpUrl);
    }

    public async publish(event: any) {
        if(!this.connection) {
            throw new Error('Not connected to Amqp server.');
        }

        const channel = await this.createChannel(this.connection);
    
        const queue = event.constructor.name;
    
        await channel.assertQueue(queue);
    
        return channel.sendToQueue(queue, Buffer.from(JSON.stringify(event)));
    }

    public async subscribe(queue: string, callback: (event: any) => any) {
        if(!this.connection) {
            throw new Error('Not connected to Amqp server.');
        }
        
        const channel = await this.createChannel(this.connection);
    
        await channel.assertQueue(queue);
    
        return channel.consume(queue, (msg: ConsumeMessage | null) => {
            if(msg) {
                const content = JSON.parse(msg?.content.toString());
                callback(content);
                channel.ack(msg);
            }
        });
    }

    private async createChannel(connection: Connection) {
        return await connection.createChannel();
    }
}

