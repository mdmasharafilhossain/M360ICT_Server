import { db } from "../../config/db";

export class EmployeeService {

  static async create(data: any) {
    const [emp] = await db("employees")
      .insert(data)
      .returning("*");

    return emp;
  }


  static async list(
    page: number,
    search?: string
  ) {
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
    return db("employees")
      .where({ id })
      .whereNull("deleted_at")
      .first();
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


  static async delete(id: number) {
    await db("employees")
      .where({ id })
      .update({ deleted_at: new Date() });
  }
}
