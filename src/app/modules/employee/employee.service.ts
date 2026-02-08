/* eslint-disable @typescript-eslint/no-explicit-any */
import { db } from "../../config/db";
import { AppError } from "../../utils/helper/AppError";

export class EmployeeService {
  static async create(employeeData: any) {
    const existingEmployee = await db("employees")
      .where({
        name: employeeData.name,
        age: employeeData.age,
        date_of_birth: employeeData.date_of_birth,
      })
      .whereNull("deleted_at")
      .first();

    if (existingEmployee) {
      throw AppError.conflict(
        "Employee already exists with same name, age, and date of birth"
      );
    }

    const [createdEmployee] = await db("employees")
      .insert(employeeData)
      .returning("*");

    return createdEmployee;
  }

  static async list(page: number, searchTerm?: string) {
    const limit = 10;
    const offset = (page - 1) * limit;

    const queryBuilder = db("employees")
      .whereNull("deleted_at")
      .limit(limit)
      .offset(offset);

    if (searchTerm) {
      queryBuilder.whereILike("name", `%${searchTerm}%`);
    }

    return queryBuilder;
  }

  static async getById(employeeId: number) {
    return db("employees")
      .where({ id: employeeId })
      .whereNull("deleted_at")
      .first();
  }

  static async update(employeeId: number, employeeData: any) {
    const [updatedEmployee] = await db("employees")
      .where({ id: employeeId })
      .update(
        {
          ...employeeData,
          updated_at: new Date(),
        },
        "*"
      );

    return updatedEmployee;
  }

  static async delete(employeeId: number): Promise<boolean> {
    const affectedRows = await db("employees")
      .where({ id: employeeId, deleted_at: null })
      .update({ deleted_at: new Date() });

    return affectedRows > 0;
  }
}
