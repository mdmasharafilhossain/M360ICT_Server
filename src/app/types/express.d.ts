import { JwtPayload } from "../types/index";

declare global {
  namespace Express {
    interface Request {
      user?: JwtPayload;
    }
  }
}
