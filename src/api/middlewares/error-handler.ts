import { Request, Response, NextFunction } from "express";
import { logger } from "../../providers";
import { failure } from "../utils";

export function errorLogger(err: Error, req: Request, res: Response, next: NextFunction) {
    err && logger.error(err);

    return next(err);
}

export function errorResponder(err: Error, req: Request, res: Response, next: NextFunction) {
    err && failure(res, { message: 'Something went wrong, check logs' }, 500);

    return next(err);
}

export function failSafeErrorHandler(err: Error, req: Request, res: Response, next: NextFunction) {
    err && console.error(err.stack);
}