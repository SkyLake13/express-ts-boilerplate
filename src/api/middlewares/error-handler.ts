import { Request, Response, NextFunction } from "express";
import { logger } from '../../core/logger/logger';

export function errorLogger(err: Error, req: Request, res: Response, next: NextFunction) {
    err && logger.error(err);

    return next(err);
}

export function errorResponder(err: Error, req: Request, res: Response, next: NextFunction) {
    err && res.status(500).send({ message: 'Something went wrong, check logs' });

    return next(err);
}

export function failSafeErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    err && console.error(err.stack);
}