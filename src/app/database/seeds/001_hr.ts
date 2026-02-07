import bcrypt from "bcryptjs";
import { AppError } from "../../utils/helper/AppError";

export async function seed(knex: any) {
await knex("hr_users").del();
const adminEmail = process.env.ADMIN_EMAIL;
const adminPassword = process.env.Admin_Password;
const saltRounds = process.env.SALT_ROUNDS
    ? Number(process.env.SALT_ROUNDS)
    : 10;
if (!adminEmail || !adminPassword) {
    throw AppError.unauthorized("Admin email and password not found");
  }
const hashedPassword = await bcrypt.hash(
    adminPassword,
    saltRounds
  );
await knex("hr_users").insert({
    email: adminEmail,
    password_hash: hashedPassword,
    name: "Admin",
  });
}
