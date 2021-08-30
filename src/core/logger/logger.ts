class Logger {
    constructor() { }

    public error(err: Error): void {
        console.groupCollapsed(err.name);
        console.error(err);
        console.groupEnd();
    }

    public info(message: string): void {
        console.info(message);
    }
}

const logger = new Logger();

export { logger };
