import { createRedisClient } from '../core/redis';
import { REDIS_HOST, REDIS_PORT, REDIS_USER, REDIS_PASSWORD } from '../configurations';

const redisClient = createRedisClient(REDIS_HOST, REDIS_PORT, REDIS_USER, REDIS_PASSWORD);

export { redisClient };