import bcrypt from "bcryptjs";
import { users } from "./db";

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 10);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function findUserByEmail(email: string) {
  return users.find((user) => user.email === email);
}
