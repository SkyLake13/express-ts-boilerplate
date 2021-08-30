export class Logger {
    constructor() { }

    public error(err: Error | any | string): void {
        console.error(err);
    }

    public info(message: string): void {
        console.info(message);
    }
}

