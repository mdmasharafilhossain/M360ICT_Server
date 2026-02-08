import type { Knex } from "knex";
import dotenv from "dotenv";

dotenv.config();

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT),
  },
  pool: { min: 2, max: 10 },

  migrations: {
    directory: "./src/app/database/migrations",
  },

  seeds: {
    directory: "./src/app/database/seeds",
  },
};

export default config;
