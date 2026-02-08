import { Router } from "express";

import * as controller from "./employee.controller";

import { createEmployeeSchema, updateEmployeeSchema } from "./employee.schema";
import { checkAuth } from "../../middlewares/checkAuth";
import { upload } from "../../middlewares/upload";
import { validate } from "../../middlewares/validate";

const router = Router();

router.use(checkAuth);

router.get("/", controller.list);
router.get("/:id", controller.getOne);

router.post(
  "/",
  upload.single("photo"),
  validate(createEmployeeSchema),
  controller.create
);

router.put(
  "/:id",
  upload.single("photo"),
  validate(updateEmployeeSchema),
  controller.update
);

router.delete("/:id", controller.remove);

export default router;
