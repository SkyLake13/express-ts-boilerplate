import { Response } from 'express';

export function success(res: Response, data: any, statusCode?: number) {
    return res.status(statusCode || 200).send(data);
}

export function failure(res: Response, data: any, statusCode?: number) {
    return res.status(statusCode || 500).send(data);
}