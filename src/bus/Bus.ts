import EventEmitter from "events";
import { Command } from './Command';

class Bus extends EventEmitter{
    constructor() {
        super();
    }

    public send(command: Command): boolean {
        const event = command.constructor.name;
        return super.emit(event, command);
    }

    public handle(handler: (command: Command) => void): Bus {
        const event = handler.arguments[0].constructor.name;
        super.addListener(event, handler);

        return this;
    }

    public handlers(event: string): Function[] {
        return super.listeners(event);
    }

    public get events(): (string | symbol)[]  {
        return super.eventNames();
    }
}

const bus = new Bus();

export { bus }