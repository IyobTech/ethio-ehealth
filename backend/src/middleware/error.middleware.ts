import { Express, Request, Response, NextFunction } from 'express';

interface CustomError extends Error {
  statusCode?: number;
  errorCode?: string;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  const errorCode = err.errorCode || 'INTERNAL_ERROR';

  console.error(`
❌ Error occurred:
   Message: ${message}
   Code: ${errorCode}
   Status: ${statusCode}
   Path: ${req.method} ${req.path}
`);

  res.status(statusCode).json({
    success: false,
    error: {
      message,
      code: errorCode,
      status: statusCode
    },
    timestamp: new Date().toISOString()
  });
};

export class AppError extends Error {
  constructor(
    public statusCode: number,
    message: string,
    public errorCode: string = 'APP_ERROR'
  ) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
}

export const createError = (
  statusCode: number,
  message: string,
  errorCode: string = 'ERROR'
): AppError => {
  return new AppError(statusCode, message, errorCode);
};
