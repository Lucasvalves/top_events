import { Request, Response, NextFunction } from "express"
import { HttpExepiton } from "../interfaces/HttpExepiton"


export function errorMiddleware(err:HttpExepiton, req: Request, res:Response, next:NextFunction){
  const status: number = err.status ?? 500;
  const message: string = err.message ?? 'Internal Server Error'

  res.status(status).json({
    status,
    message,
  })
}