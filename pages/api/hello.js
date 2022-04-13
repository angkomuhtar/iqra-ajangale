import db from "lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  res.status(200).json({ name: "hello" });
}
