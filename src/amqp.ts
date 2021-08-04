import { connect, ConsumeMessage } from 'amqplib';
import { AMQP_URL } from './config';

const connection = connect(AMQP_URL);

export async function publish(event: any): Promise<boolean> {
    const channel = await createChannel();

    const queue = event.constructor.name;

    await channel.assertQueue(queue);

    return channel.sendToQueue(queue, Buffer.from(JSON.stringify(event)));
}

export async function subscribe(queue: string, callback: (event: any) => any) {
    const channel = await createChannel();

    await channel.assertQueue(queue);

    return channel.consume(queue, (msg: ConsumeMessage | null) => {
        if(msg) {
            const content = JSON.parse(msg?.content.toString());
            callback(content);
            channel.ack(msg);
        }
    });
}

async function createChannel() {
    const amqp = await connection;
    const channel = await amqp.createChannel();
    return channel;
}