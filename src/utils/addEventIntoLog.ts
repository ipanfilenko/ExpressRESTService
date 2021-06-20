import * as fs from 'fs';
import { Request, Response } from 'express';
import dayjs from 'dayjs-ext';

export const addEventIntoLog = (loggerEvent: Partial<Request & Response>): void => {
    const stream = fs.createWriteStream('./logs/log.txt', {
        flags: 'a+'
    });

    const { url, method, params, query, body, statusCode } = loggerEvent;

    stream.once('open', ()  => {
        stream.write(`Date: ${dayjs(new Date()).format('MM/DD/YYYY h:mm:ss')}\n`);
        stream.write(`Url: ${url}\n`);
        stream.write(`Method: ${method}\n`);
        stream.write(`StatusCode: ${statusCode}\n`);
        stream.write(`Params: ${JSON.stringify(params)}\n`);
        stream.write(`Query: ${JSON.stringify(query)}\n`);
        stream.write(`Body: ${JSON.stringify(body)}\n`);
        stream.write(`-------------------------------------------------\n`);
        stream.end();
    })
};

export const addErrorIntoLog = (loggerEvent: Partial<Request & Response>): void => {
    const stream = fs.createWriteStream('./logs/errors.txt', {
        flags: 'a+'
    });

    const { url, method } = loggerEvent;

    stream.once('open', ()  => {
        stream.write(`Date: ${dayjs(new Date()).format('MM/DD/YYYY h:mm:ss')}\n`);
        stream.write(`Url: ${url}\n`);
        stream.write(`Method: ${method}\n`);
        stream.write(`StatusCode: ${500}\n`);
        stream.write(`Message: Internal Server Error\n`);
        stream.write(`-------------------------------------------------\n`);
        stream.end();
    })
};

export const addExceptionIntoLog = (error: Error, type: string): void => {
    const stream = fs.createWriteStream('./logs/errors.txt', {
        flags: 'a+'
    });

    const { name, message } = error;

    process.stdout.write(`${type}: ${message}`);

    stream.once('open', ()  => {
        stream.write(`Date: ${dayjs(new Date()).format('MM/DD/YYYY h:mm:ss')}\n`);
        stream.write(`${name}: ${type}\n`);
        stream.write(`Message: ${message}\n`);
        stream.write(`-------------------------------------------------\n`);
        stream.end();
    });
};
