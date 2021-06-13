import { Request, Response, NextFunction } from 'express';

// Based on https://stackoverflow.com/questions/43356705/node-js-express-error-handling-middleware-with-router
export const handleErrorAsync = (func: (req: Request, res: Response, next: NextFunction) => void) => async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        await func(req, res, next);
    } catch (error) {
        const { name,  message } = error;
        next({ name, message });
    }
};
