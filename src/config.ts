import * as dotenv from 'dotenv';

dotenv.config();

const env = process.env;

const DB_CONNECTION = (env as any).DB_CONNECTION_STRING as string; // mongodb connection string
const JWT_PRIVATE_KEY = (env as any).JWT_PRIVATE_KEY;
const TOKEN_EXPIRATION = (env as any).TOKEN_EXPIRATION; //jWT token expiration time
const PORT = (env as any).PORT as number; // server port

const AMQP_URL = (env as any).AMQP_URL as string; // AMPQ url

const SECURE_SERVER_CERT = (env as any).SECURE_SERVER_CERT as string;
const SECURE_SERVER_KEY = (env as any).SECURE_SERVER_KEY as string;

const REDIS_HOST = (env as any).REDIS_HOST as string;
const REDIS_PORT = (env as any).REDIS_PORT as number;
const REDIS_USER = (env as any).REDIS_USER as string;
const REDIS_PASSWORD = (env as any).REDIS_PASSWORD as string;


export { 
    DB_CONNECTION,
    JWT_PRIVATE_KEY,
    TOKEN_EXPIRATION,
    PORT,
    AMQP_URL,
    SECURE_SERVER_CERT,
    SECURE_SERVER_KEY,
    REDIS_HOST, REDIS_PORT, REDIS_USER, REDIS_PASSWORD
}