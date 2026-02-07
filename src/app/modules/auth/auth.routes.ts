import { Router } from "express";

import * as AuthController from "./auth.controller";

import {
  loginSchema,
  registerSchema,
} from "./auth.schema";
import { validate } from "../../middlewares/validate";

const router = Router();
router.post(
  "/register",
  validate(registerSchema),
  AuthController.register
);
router.post(
  "/login",
  validate(loginSchema),
  AuthController.login
);
router.post("/logout", AuthController.logout);

export default router;
