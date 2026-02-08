import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./app/modules/auth/auth.routes";
import employeeRoutes from "./app/modules/employee/employee.routes";
import attendanceRoutes from "./app/modules/attendance/attendance.routes";
import reportRoutes from "./app/modules/report/report.routes";
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { AppError } from "./app/utils/helper/AppError";

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || true,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

if (!process.env.UPLOAD_PATH) {
  throw new Error("UPLOAD_PATH is not defined");
}

app.use("/uploads", express.static(process.env.UPLOAD_PATH));

app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);
app.use("/attendance", attendanceRoutes);
app.use("/reports", reportRoutes);

app.get("/health", (_, res) => {
  res.json({ status: "OK" });
});

app.use((_req, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

app.use(globalErrorHandler);

export default app;
