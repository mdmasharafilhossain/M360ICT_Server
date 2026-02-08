import { Request, Response, NextFunction } from "express";
import { AttendanceService } from "./attendance.service";
import { AppError } from "../../utils/helper/AppError";

export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await AttendanceService.list(req.query);

    res.json(data);
  } catch (error) {
    return next(error);
  }
}

export async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return next(AppError.badRequest("Invalid attendance ID"));
    }

    const data = await AttendanceService.getById(id);

    if (!data) {
      return next(AppError.notFound("Attendance record not found"));
    }

    res.json(data);
  } catch (error) {
    return next(error);
  }
}

export async function upsert(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return next(AppError.badRequest("Attendance data is required"));
    }

    const result = await AttendanceService.upsert(req.body);

    res.json(result);
  } catch (error) {
    return next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return next(AppError.badRequest("Invalid attendance ID"));
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      return next(AppError.badRequest("Update data is required"));
    }

    const updated = await AttendanceService.update(id, req.body);

    if (!updated) {
      return next(AppError.notFound("Attendance record not found"));
    }

    res.json({ message: "Updated" });
  } catch (error) {
    return next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const id = Number(req.params.id);

    if (!id || isNaN(id)) {
      return next(AppError.badRequest("Invalid attendance ID"));
    }

    const deleted = await AttendanceService.delete(id);

    if (!deleted) {
      return next(AppError.notFound("Attendance record not found"));
    }

    res.json({ message: "Deleted" });
  } catch (error) {
    return next(error);
  }
}
