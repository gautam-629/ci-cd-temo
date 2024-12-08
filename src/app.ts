import express, { NextFunction, Request, Response } from 'express';
import createHttpError, { HttpError } from 'http-errors';
import logger from './config/logger';

let app = express();

app.use('/', (req, res, next) => {
  // const err=createHttpError(401,'Unauthorized')
  next(createHttpError(401, 'Unauthorized'));
  return;
  // throw err;

  res.send('Welcome to the Express app');
});

app.use((err: HttpError, req: Request, res: Response, next: NextFunction) => {
  logger.error(err.message);
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    error: [
      {
        type: err.name,
        name: err.name,
        path: '',
        location: '',
      },
    ],
  });
});

export default app;
