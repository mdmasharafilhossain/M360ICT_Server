import { db } from "../../config/db";
import { compare, hash } from "../../utils/hashPassWord";
import { AppError } from "../../utils/helper/AppError";
import { signJwt } from "../../utils/jwt";
import { LoginInput, RegisterInput } from "./auth.interface";

export class AuthService {

  static async register(data: RegisterInput) {
    const exists = await db("hr_users")
      .where({ email: data.email })
      .first();

    if (exists) {
      throw AppError.conflict("Email already exists");;
    }

    const passwordHash = await hash(data.password);

    const [user] = await db("hr_users")
      .insert({
        name: data.name,
        email: data.email,
        password_hash: passwordHash,
      })
      .returning(["id", "email", "name"]);

    return user;
  }
  static async login(data: LoginInput) {
    const user = await db("hr_users")
      .where({ email: data.email })
      .first();

    if (!user) {
      throw AppError.unauthorized("Invalid credentials");
    }

    const isValid = await compare(
      data.password,
      user.password_hash
    );

    if (!isValid) {
      throw AppError.unauthorized("Invalid credentials");
    }

    const token = signJwt({
      id: user.id,
      email: user.email,
    });

    return {
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
      },
    };
  }
}
