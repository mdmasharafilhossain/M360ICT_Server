import { Request, Response, NextFunction } from "express";
import { ReportService } from "./report.service";
import { AppError } from "../../utils/helper/AppError";

export async function attendanceReport(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const month = (req.query.month as string)?.trim();

    if (!month) {
      return next(AppError.badRequest("Month is required"));
    }

    if (!/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) {
      return next(AppError.badRequest("Month must be in YYYY-MM format"));
    }

    const employeeId = req.query.employee_id
      ? Number(req.query.employee_id)
      : undefined;

    if (req.query.employee_id && (isNaN(employeeId!) || employeeId! <= 0)) {
      return next(AppError.badRequest("Invalid employee ID"));
    }

    const attendanceSummary = await ReportService.attendance(month, employeeId);

    if (!attendanceSummary || attendanceSummary.length === 0) {
      return next(
        AppError.notFound(`No attendance records found for ${month}`)
      );
    }

    res.status(200).json({
      status: "success",
      data: attendanceSummary,
    });
  } catch (error) {
    return next(error);
  }
}
