import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

// import { auth } from "./middlewares/auth.middleware";
// import { upload } from "./middlewares/upload.middleware";
// import { validate } from "./middlewares/validate.middleware";

// import { login } from "./modules/auth/auth.controller";
// import { loginSchema } from "./modules/auth/auth.schema";

// import * as emp from "./modules/employee/employee.controller";
// import * as att from "./modules/attendance/attendance.controller";
// import * as rep from "./modules/report/report.controller";

dotenv.config();

export const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

/* Auth */
// app.post("/auth/login", validate(loginSchema), login);

// /* Employees */
// app.get("/employees", auth, emp.list);
// app.get("/employees/:id", auth, emp.getOne);

// app.post(
//   "/employees",
//   auth,
//   upload.single("photo"),
//   emp.create
// );

// app.put(
//   "/employees/:id",
//   auth,
//   upload.single("photo"),
//   emp.update
// );

// app.delete("/employees/:id", auth, emp.remove);

// /* Attendance */
// app.get("/attendance", auth, att.list);
// app.get("/attendance/:id", auth, att.getOne);

// app.post("/attendance", auth, att.upsert);
// app.put("/attendance/:id", auth, att.update);
// app.delete("/attendance/:id", auth, att.remove);

// /* Report */
// app.get(
//   "/reports/attendance",
//   auth,
//   rep.attendanceReport
// );
