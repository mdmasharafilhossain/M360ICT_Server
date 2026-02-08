import { db } from "../../config/db";

export class AttendanceService {
  static async list(filters: any) {
    const page = Number(filters.page) || 1;
    const limit = 10;
    const offset = (page - 1) * limit;

    const q = db("attendance").limit(limit).offset(offset);

    if (filters.employee_id) {
      q.where("employee_id", filters.employee_id);
    }

    if (filters.date) {
      q.where("date", filters.date);
    }

    if (filters.from && filters.to) {
      q.whereBetween("date", [filters.from, filters.to]);
    }

    return q;
  }

  static async getById(id: number) {
    return db("attendance").where({ id }).first();
  }

  static async upsert(data: any) {
    const exists = await db("attendance")
      .where({
        employee_id: data.employee_id,
        date: data.date,
      })
      .first();

    if (exists) {
      await db("attendance").where({ id: exists.id }).update({
        check_in_time: data.check_in_time,
      });

      return { updated: true };
    }

    await db("attendance").insert(data);

    return { created: true };
  }

  static async update(id: number, data: any): Promise<boolean> {
    const count = await db("attendance").where({ id }).update(data);

    return count > 0;
  }

  static async delete(id: number): Promise<boolean> {
    const count = await db("attendance").where({ id }).del();

    return count > 0;
  }
}
