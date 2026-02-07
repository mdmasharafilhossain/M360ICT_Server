import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./app/modules/auth/auth.routes";
import employeeRoutes from "./app/modules/employee/employee.routes";

dotenv.config();

const app = express();


app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());


app.use(
  "/uploads",
  express.static(process.env.UPLOAD_PATH!)
);


app.use("/auth", authRoutes);
app.use("/employees", employeeRoutes);
// app.use("/attendance", attendanceRoutes);
// app.use("/reports", reportRoutes);


app.get("/health", (_, res) => {
  res.json({ status: "OK" });
});

app.use((_, res) => {
  res.status(404).json({
    message: "Route not found",
  });
});

export default app;
