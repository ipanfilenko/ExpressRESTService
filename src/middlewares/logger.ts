import { Request, Response, NextFunction } from 'express';
import { finished } from 'stream';
import {addEventIntoLog, addErrorIntoLog, addExceptionIntoLog} from '../utils/addEventIntoLog';

export const Logger = ( req: Request, res: Response, next: NextFunction): void => {
    finished(res, () => {
        const { url, method, params, query, body } = req;
        const { statusCode } = res;
        addEventIntoLog({ url, method, params, query, body, statusCode });
        process.stdout.write(JSON.stringify({ url, method, params, query, body, statusCode }));
    });

    next();
};

interface CustomError extends Error {
    status?: number;
    message: string;
}

export const ErrorLogger = (error: CustomError, req: Request, res: Response, next: NextFunction): void => {
    const { url, method } = req;

    if (error) {
        addErrorIntoLog({ url, method });

        const errorStatus = error.status || 500;
        const errorForLog = {
            status: errorStatus,
            message: error.message || 'Internal Server Error',
            type: 'internal'
        };

        res.status(errorStatus).send(errorForLog);

        process.stdout.write(JSON.stringify(errorForLog))
    }

    next();
};

process
    .on('uncaughtException', (error: Error) => {
        addExceptionIntoLog(error, 'Uncaught exception');
    })
    .on('unhandledRejection', (error: Error) => {
        addExceptionIntoLog(error, 'Unhandled rejection');
    });
