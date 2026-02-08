import { Server } from "http";
import dotenv from "dotenv";

import { db } from "./app/config/db";
import app from "./app";

let server: Server;

dotenv.config();

async function connectToDB() {
  try {
    await db.raw("SELECT 1");

    console.log("Database connected successfully!!!!!!!! ");
  } catch (error) {
    console.log("Database connection failed ");
    console.log(error);

    process.exit(1);
  }
}

const startServer = async () => {
  try {
    await connectToDB();

    server = app.listen(process.env.PORT, () => {
      console.log(`Server is listening on port ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("Server startup failed");
    console.log(error);
  }
};

(async () => {
  await startServer();
})();

process.on("SIGTERM", () => {
  console.log("SIGTERM received... Shutting down server...");

  if (server) {
    server.close(() => {
      console.log("Server closed.");
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("SIGINT", () => {
  console.log("SIGINT received... Shutting down server...");

  if (server) {
    server.close(() => {
      console.log("Server closed.");
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected... Shutting down...", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception detected... Shutting down...", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
