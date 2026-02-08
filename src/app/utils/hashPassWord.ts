import bcrypt from "bcryptjs";

export const hash = (password: string) =>
  bcrypt.hash(
    password,
    process.env.SALT_ROUNDS ? Number(process.env.SALT_ROUNDS) : 10
  );

export const compare = (password: string, hashPass: string) =>
  bcrypt.compare(password, hashPass);
