/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { AppError } from "../utils/helper/AppError";

export function globalErrorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err instanceof AppError) {
    statusCode = err.statusCode;
    message = err.message;
  }

  if (err instanceof Joi.ValidationError) {
    statusCode = 400;
    message = err.details.map((d) => d.message).join(", ");
  }

  if (err.code === "23505") {
    statusCode = 409;
    message = "Duplicate record found";
  }

  if (err.code === "22P02") {
    statusCode = 400;
    message = "Invalid input format";
  }

  if (err.code === "23503") {
    statusCode = 400;
    message = "Invalid reference data";
  }

  res.status(statusCode).json({
    status: statusCode >= 400 && statusCode < 500 ? "fail" : "error",
    message,
  });
}
