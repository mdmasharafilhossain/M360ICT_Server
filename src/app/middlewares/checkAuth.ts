import { Request, Response, NextFunction } from "express";
import { verifyJwt } from "../utils/jwt";
import { AppError } from "../utils/helper/AppError";


export function checkAuth(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const token = req.cookies[process.env.COOKIE_NAME!];
  if (!token) {
    return next(AppError.unauthorized("Unauthorized"));
  }
  try {
    const decoded = verifyJwt(token);
    req.user = decoded;
    return next(); 
  } catch (error) {
    return next(AppError.unauthorized("Invalid token"));
  }
}
