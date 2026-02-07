import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";

export async function login(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const { token, user } =
      await AuthService.login(req.body);
    res.cookie(process.env.COOKIE_NAME!, token, {
      httpOnly: true,
      sameSite: "none",
      secure: true, 
    });

    res.json({
      message: "Login successful",
      user,
    });
  } catch (error: any) {
    return next(error);
  }
}



