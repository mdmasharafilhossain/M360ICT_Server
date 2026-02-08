import { Request, Response, NextFunction } from "express";
import { EmployeeService } from "./employee.service";
import { AppError } from "../../utils/helper/AppError";
export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const data = req.body;

    if (!req.file && Object.keys(data).length === 0) {
      return next(AppError.badRequest("Employee data is required"));
    }

    if (req.file) {
      if (!req.file.mimetype.startsWith("image/")) {
        return next(AppError.badRequest("Only image files are allowed"));
      }

      data.photo_path = req.file.filename;
    }

    const createEmployee = await EmployeeService.create(data);

    res.status(201).json(createEmployee);
  } catch (error) {
    return next(error);
  }
}
export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    const page = Number(req.query.page) || 1;
    const search = req.query.search as string;

    const listOfAllEmployee = await EmployeeService.list(page, search);

    res.json(listOfAllEmployee);
  } catch (error) {
    return next(error);
  }
}
export async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    const findEmployeeById = await EmployeeService.getById(
      Number(req.params.id)
    );

    if (!findEmployeeById) {
      return next(AppError.notFound("Employee not found"));
    }

    res.json(findEmployeeById);
  } catch (error) {
    return next(error);
  }
}
export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return next(AppError.badRequest("Invalid employee ID"));
    }

    const data = req.body;

    if (!req.file && Object.keys(data).length === 0) {
      return next(AppError.badRequest("No data provided for update"));
    }

    if (req.file) {
      if (!req.file.mimetype.startsWith("image/")) {
        return next(AppError.badRequest("Only image files are allowed"));
      }
      data.photo_path = req.file.filename;
    }
    const emp = await EmployeeService.update(id, data);

    if (!emp) {
      return next(AppError.notFound("Employee not found"));
    }

    res.json(emp);
  } catch (error) {
    return next(error);
  }
}
export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return next(AppError.badRequest("Invalid employee ID"));
    }

    const deleted = await EmployeeService.delete(id);

    if (!deleted) {
      return next(AppError.notFound("Employee not found"));
    }

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    return next(error);
  }
}
