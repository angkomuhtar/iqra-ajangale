import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
import moment from "moment";
import db from "lib/db";
var mv = require("mv");

export default async (req, res) => {
  const { pid, type } = req.query;

  switch (type) {
    case "hapus":
      const cek = await db("pegawai").where("id", pid).del();
      const remove = await fs.rm(`./public/berkas/${pid}`, {
        recursive: true,
      });
      if (!cek) return res.status(500).json({ message: "Server Error" });
      return res
        .status(200)
        .json({ message: "Delete Successfull", status: "ok" });
      break;
    case "update":
      break;
    case "berkas":
      const pegawai = await db("berkas")
        .where("pegawai", pid)
        .join("pegawai", "berkas.pegawai", "=", "pegawai.id")
        .select("berkas.*", "pegawai.nip", "pegawai.name")
        .first();
      if (!pegawai) return res.status(500).json({ message: "Server Error" });
      return res
        .status(200)
        .json({ message: "Delete Successfull", status: "ok", data: pegawai });
      break;
    default:
      return res.status(404).end();
      break;
  }
};
