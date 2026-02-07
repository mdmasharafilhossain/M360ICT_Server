import { Router } from "express";

import * as AuthController from "./auth.controller";

import {
  loginSchema,
} from "./auth.schema";
import { validate } from "../../middlewares/validate";

const router = Router();

router.post(
  "/login",validate(loginSchema), AuthController.login
);


export default router;
