import { Request, Response, NextFunction } from 'express';
import { addEventIntoLog, addErrorIntoLog } from '../utils/addEventIntoLog';

const Logger = (error: Error, req: Request, res: Response, next: NextFunction): void => {
    const { url, method, params, query, body } = req;

    if (error) {
        addErrorIntoLog({ url, method });

        res.status(500).send({
            status: 500,
            message: 'Internal Server Error',
            type: 'internal'
        })
    }

    const { statusCode } = res;

    addEventIntoLog({ url, method, params, query, body, statusCode });

    next();
};

export default Logger;
