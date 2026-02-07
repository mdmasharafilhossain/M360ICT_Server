import { db } from "../../config/db";
import { compare } from "../../utils/hashPassWord";
import { AppError } from "../../utils/helper/AppError";
import { signJwt } from "../../utils/jwt";
import { LoginInput} from "./auth.interface";

export class AuthService {
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
