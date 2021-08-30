import Redis from 'ioredis';

export const createRedisClient = (host: string, port: number, username: string, password: string) => {
    const options: Redis.RedisOptions = {
        port: port,
        host: host,
        username: username,
        password: password
    }

    return new Redis(options);
}
