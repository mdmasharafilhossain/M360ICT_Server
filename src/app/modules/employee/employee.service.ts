import { db } from "../../config/db";
import { AppError } from "../../utils/helper/AppError";

export class EmployeeService {
  static async create(data: any) {
    const exists = await db("employees")
      .where({
        name: data.name,
        age: data.age,
        date_of_birth: data.date_of_birth,
      })
      .first();

    if (exists) {
      throw AppError.conflict(
        "Employee already exists with same name, age, and date of birth"
      );
    }
    const [emp] = await db("employees").insert(data).returning("*");

    return emp;
  }

  static async list(page: number, search?: string) {
    const limit = 10;
    const offset = (page - 1) * limit;

    const q = db("employees")
      .whereNull("deleted_at")
      .limit(limit)
      .offset(offset);

    if (search) {
      q.whereILike("name", `%${search}%`);
    }

    return q;
  }

  static async getById(id: number) {
    return db("employees").where({ id }).whereNull("deleted_at").first();
  }

  static async update(id: number, data: any) {
    const [emp] = await db("employees")
      .where({ id })
      .update({
        ...data,
        updated_at: new Date(),
      })
      .returning("*");

    return emp;
  }

  static async delete(id: number): Promise<boolean> {
    const count = await db("employees")
      .where({ id, deleted_at: null })
      .update({ deleted_at: new Date() });

    return count > 0;
  }
}
