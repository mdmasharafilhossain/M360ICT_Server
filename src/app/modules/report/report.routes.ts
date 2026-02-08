import { Router } from "express";

import * as controller from "./report.controller";
import { checkAuth } from "../../middlewares/checkAuth";

const router = Router();

router.use(checkAuth);

router.get("/attendance", controller.attendanceReport);

export default router;
