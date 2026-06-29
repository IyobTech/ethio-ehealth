import { Request, Response, NextFunction } from 'express';

interface RequestLog {
  timestamp: string;
  method: string;
  path: string;
  ip: string;
  userAgent: string;
}

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
  const logData: RequestLog = {
    timestamp: new Date().toISOString(),
    method: req.method,
    path: req.path,
    ip: req.ip || 'unknown',
    userAgent: req.get('user-agent') || 'unknown'
  };

  console.log(`📨 [${logData.method}] ${logData.path} - ${logData.ip}`);
  next();
};
