import * as dotenv from 'dotenv';

dotenv.config();

const env = process.env;

const DB_CONNECTION = (env as any).DB_CONNECTION_STRING as string;
const JWT_PRIVATE_KEY = (env as any).JWT_PRIVATE_KEY;
const TOKEN_EXPIRATION = (env as any).TOKEN_EXPIRATION;
const PORT = (env as any).PORT as number;
const AMQP_URL = (env as any).AMQP_URL as string;
const SECURE_SERVER_CERT = (env as any).SECURE_SERVER_CERT as string;
const SECURE_SERVER_KEY = (env as any).SECURE_SERVER_KEY as string;

export { 
    DB_CONNECTION,
    JWT_PRIVATE_KEY,
    TOKEN_EXPIRATION,
    PORT,
    AMQP_URL,
    SECURE_SERVER_CERT,
    SECURE_SERVER_KEY
}