import { Router } from "express";

import * as controller from "./attendance.controller";
import { attendanceSchema } from "./attendance.schema";
import { checkAuth } from "../../middlewares/checkAuth";
import { validate } from "../../middlewares/validate";

const router = Router();

router.use(checkAuth);

router.get("/", controller.list);
router.get("/:id", controller.getOne);

router.post(
  "/",
  validate(attendanceSchema),
  controller.upsert
);

router.put("/:id", controller.update);
router.delete("/:id", controller.remove);

export default router;
