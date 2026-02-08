import { db } from "../../config/db";

export class ReportService {
  static async attendance(month: string, employeeId?: number) {
    const queryBuilder = db("attendance as a")
      .join("employees as e", "a.employee_id", "e.id")
      .whereRaw("to_char(a.date,'YYYY-MM') = ?", [month]);

    if (employeeId) {
      queryBuilder.where("e.id", employeeId);
    }

    return queryBuilder
      .groupBy("e.id", "e.name")
      .select(
        "e.id",
        "e.name",
        db.raw("COUNT(a.id) AS days_present"),
        db.raw(
          "SUM(CASE WHEN a.check_in_time > '09:45' THEN 1 ELSE 0 END) AS times_late"
        )
      );
  }
}
