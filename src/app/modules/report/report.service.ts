import { db } from "../../config/db";

export class ReportService {
  static async attendance(month: string, employeeId?: number) {
    const q = db("attendance as a")
      .join("employees as e", "a.employee_id", "e.id")
      .whereRaw("to_char(a.date,'YYYY-MM')=?", [month]);

    if (employeeId) {
      q.where("e.id", employeeId);
    }

    return q
      .groupBy("e.id", "e.name")
      .select("e.id", "e.name")
      .count("a.id as days_present")
      .sum(db.raw("CASE WHEN a.check_in_time > '09:45' THEN 1 ELSE 0 END"))
      .as("times_late");
  }
}
