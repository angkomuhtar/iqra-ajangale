import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import db from "lib/db";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status("405").end();
  const { username, password } = req.body;
  const checkUser = await db("users").where({ username }).first();

  if (!checkUser) return res.status(401).json({ message: "User not Found" });

  const checkPassword = await bcrypt.compare(password, checkUser.password);
  if (!checkPassword) return res.status(401).end();
  const token = jwt.sign(
    {
      id: checkUser.id,
      username: checkUser.username,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "2 days",
    }
  );

  res.status(200);
  res.json({
    message: "Login successfully",
    token,
    data: {
      id: checkUser.id,
      name: checkUser.name,
      username: checkUser.username,
    },
  });
}
