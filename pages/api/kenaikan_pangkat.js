import db from "lib/db";
import moment from "moment";
import formidable from "formidable";
import { end } from "@popperjs/core";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const pegawaiList = await db("kenaikan_pangkat").select();
      res.status(200).json({ message: "success", data: pegawaiList });
      break;
    default:
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
      break;
  }
}
