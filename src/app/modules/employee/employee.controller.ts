import { Request, Response, NextFunction } from "express";
import { EmployeeService } from "./employee.service";
import { AppError } from "../../utils/helper/AppError";
export async function create(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;

    if (req.file) {
      data.photo_path = req.file.filename;
    }

    const emp = await EmployeeService.create(data);

    res.status(201).json(emp);
  } catch (error) {
    return next(error);
  }
}
export async function list(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const page = Number(req.query.page) || 1;
    const search = req.query.search as string;

    const data = await EmployeeService.list(page, search);

    res.json(data);
  } catch (error) {
    return next(error);
  }
}
export async function getOne(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const emp = await EmployeeService.getById(
      Number(req.params.id)
    );

    if (!emp) {
      return next(AppError.notFound("Employee not found"));
    }

    res.json(emp);
  } catch (error) {
    return next(error);
  }
}
export async function update(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;

    if (req.file) {
      data.photo_path = req.file.filename;
    }

    const emp = await EmployeeService.update(
      Number(req.params.id),
      data
    );

    if (!emp) {
      return next(AppError.notFound("Employee not found"));
    }

    res.json(emp);
  } catch (error) {
    return next(error);
  }
}
export async function remove(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    await EmployeeService.delete(
      Number(req.params.id)
    );

    res.json({ message: "Deleted" });
  } catch (error) {
    return next(error);
  }
}
