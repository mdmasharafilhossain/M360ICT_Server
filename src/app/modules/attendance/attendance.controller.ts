import { Request, Response, NextFunction } from "express";
import { AttendanceService } from "./attendance.service";
import { AppError } from "../../utils/helper/AppError";

export async function list(req: Request, res: Response, next: NextFunction) {
  try {
    const attendanceRecords = await AttendanceService.list(req.query);

    res.status(200).json({
      status: "success",
      data: attendanceRecords,
    });
  } catch (error) {
    return next(error);
  }
}

export async function getOne(req: Request, res: Response, next: NextFunction) {
  try {
    const attendanceId = Number(req.params.id);

    if (!attendanceId || isNaN(attendanceId)) {
      return next(AppError.badRequest("Invalid attendance ID"));
    }

    const attendanceRecord = await AttendanceService.getById(attendanceId);

    if (!attendanceRecord) {
      return next(AppError.notFound("Attendance record not found"));
    }

    res.status(200).json({
      status: "success",
      data: attendanceRecord,
    });
  } catch (error) {
    return next(error);
  }
}

export async function upsert(req: Request, res: Response, next: NextFunction) {
  try {
    if (!req.body || Object.keys(req.body).length === 0) {
      return next(AppError.badRequest("Attendance data is required"));
    }

    const upsertResult = await AttendanceService.upsert(req.body);

    res.status(200).json({
      status: "success",
      data: upsertResult,
    });
  } catch (error) {
    return next(error);
  }
}

export async function update(req: Request, res: Response, next: NextFunction) {
  try {
    const attendanceId = Number(req.params.id);

    if (!attendanceId || isNaN(attendanceId)) {
      return next(AppError.badRequest("Invalid attendance ID"));
    }

    if (!req.body || Object.keys(req.body).length === 0) {
      return next(AppError.badRequest("Update data is required"));
    }

    const isUpdated = await AttendanceService.update(attendanceId, req.body);

    if (!isUpdated) {
      return next(AppError.notFound("Attendance record not found"));
    }

    res.status(200).json({
      status: "success",
      data: {
        message: "Updated",
      },
    });
  } catch (error) {
    return next(error);
  }
}

export async function remove(req: Request, res: Response, next: NextFunction) {
  try {
    const attendanceId = Number(req.params.id);

    if (!attendanceId || isNaN(attendanceId)) {
      return next(AppError.badRequest("Invalid attendance ID"));
    }

    const isDeleted = await AttendanceService.delete(attendanceId);

    if (!isDeleted) {
      return next(AppError.notFound("Attendance record not found"));
    }

    res.status(200).json({
      status: "success",
      data: {
        message: "Deleted",
      },
    });
  } catch (error) {
    return next(error);
  }
}
