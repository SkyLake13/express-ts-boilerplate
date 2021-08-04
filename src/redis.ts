import Redis from 'ioredis';
import { REDIS_HOST, REDIS_PORT, REDIS_USER, REDIS_PASSWORD } from './config';

const createRedisClient = () => {
    const options: Redis.RedisOptions = {
        port: REDIS_PORT,
        host: REDIS_HOST,
        username: REDIS_USER,
        password: REDIS_PASSWORD
    }

    return new Redis(options);
}

const redisClient = createRedisClient();

export { redisClient };