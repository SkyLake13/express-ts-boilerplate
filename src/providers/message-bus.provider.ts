import { Amqp } from "../core/amqp";
import { AMQP_URL } from "../configurations";

async function messageBusProvider() {
    const amqpClient = new Amqp();
    amqpClient.connect(AMQP_URL);
    
    return amqpClient;
}

export const messageBus = messageBusProvider();
