import { Request, Response, NextFunction } from 'express'
import { ApiError } from '../helpers/api-erros'

export const errorMiddleware = (
  error: Error & Partial<ApiError>,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = error.statusCode ?? 500
  const message = error.statusCode ? error.message : 'Internal server Error'
  return res.status(statusCode).json({ message }), next
}
