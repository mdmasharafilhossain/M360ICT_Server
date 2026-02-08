/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "../../config/db";

export class AttendanceService {
  static async list(queryFilters: any) {
    const page = Number(queryFilters.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const queryBuilder = db("attendance").limit(limit).offset(offset);

    if (queryFilters.employee_id) {
      queryBuilder.where("employee_id", queryFilters.employee_id);
    }

    if (queryFilters.date) {
      queryBuilder.where("date", queryFilters.date);
    }

    if (queryFilters.from && queryFilters.to) {
      queryBuilder.whereBetween("date", [queryFilters.from, queryFilters.to]);
    }

    return queryBuilder;
  }

  static async getById(attendanceId: number) {
    return db("attendance").where({ id: attendanceId }).first();
  }

  static async upsert(attendanceData: any) {
    const existingAttendance = await db("attendance")
      .where({
        employee_id: attendanceData.employee_id,
        date: attendanceData.date,
      })
      .first();

    if (existingAttendance) {
      await db("attendance").where({ id: existingAttendance.id }).update({
        check_in_time: attendanceData.check_in_time,
      });

      return { updated: true };
    }

    await db("attendance").insert(attendanceData);

    return { created: true };
  }

  static async update(
    attendanceId: number,
    attendanceData: any
  ): Promise<boolean> {
    const affectedRows = await db("attendance")
      .where({ id: attendanceId })
      .update(attendanceData);

    return affectedRows > 0;
  }

  static async delete(attendanceId: number): Promise<boolean> {
    const affectedRows = await db("attendance")
      .where({ id: attendanceId })
      .del();

    return affectedRows > 0;
  }
}
