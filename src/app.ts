import express, { Application, NextFunction, Request, Response } from 'express';
import { HttpError } from 'http-errors';
import logger from './config/logger';
import userRouter from './routes/user';

const app = express();

// Middleware for JSON parsing
app.use(express.json());
app.use('/', userRouter);
app.use(express.urlencoded({ extended: false }));

// Error handling middleware
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

// Export the app
export default app;
