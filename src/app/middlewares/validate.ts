import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import { AppError } from "../utils/helper/AppError";

export function validate(schema: Joi.ObjectSchema) {
  return (req: Request, _res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);

    if (error)
      return next(AppError.badRequest(error.message));

    next();
  };
}
