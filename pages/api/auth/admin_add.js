import db from "lib/db";
import bcrypt from "bcryptjs";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();
  const { username, password, name } = req.body;
  const salt = bcrypt.genSaltSync(10);
  const passHash = bcrypt.hashSync(password, salt);

  const register = await db("users").insert({
    username,
    name,
    password: passHash,
  });

  const registered = await db("users").where({ id: register }).first();
  res.status(200).json({ message: "Resgister Successfull", data: registered });
}
