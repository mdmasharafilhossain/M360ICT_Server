import { Request, Response, NextFunction } from "express";
import { AuthService } from "./auth.service";

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const user = await AuthService.register(req.body);
    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (error: any) {
    return next(error); 
  }
}
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


export function logout(_req: Request, res: Response) {
  res.clearCookie(process.env.COOKIE_NAME!);

  res.json({
    message: "Logged out successfully",
  });
}
