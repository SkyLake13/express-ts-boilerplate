import { Request, Response } from "express";
import { sign, verify } from "jsonwebtoken";

const privateKey = (process.env as any).JWT_PRIVATE_KEY;

export function createToken(payload: {}): string {
    const expiresIn = (process.env as any).TOKEN_EXPIRATION;

    return sign(payload, privateKey, { expiresIn: Number(expiresIn) });
}

function verifyToken(token: string) {
    return verify(token, privateKey);
}

export function authorize(req: Request, res: Response, next: any) {
    const authheader = req.headers.authorization;
    if(authheader && (authheader.indexOf('Bearer ') > -1)) {
        const token = authheader.split(' ')[1];

        if(token && verifyToken(token)) {
            return next();
        }
    }

    
    return res.status(403).send('Unauthorized');
}