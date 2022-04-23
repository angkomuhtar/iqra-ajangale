import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
import db from "lib/db";

let mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  let newPath = "";
  let namefile = "";
  let { pid } = req.query;

  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve([fields, files]);
    });
  });
  let field = Object.keys(data[1]);
  let oldPath = data[1][field].filepath;
  let type = data[1][field].originalFilename.split(".");
  namefile = `${field}.${type[type.length - 1]}`;
  newPath = `./public/berkas/${pid}/${namefile}`;
  mv(oldPath, newPath, function (err) {
    if (err) return res.status(400).json({ message: "Error When Upload File" });
  });
  const cek = await db("berkas")
    .where("pegawai", pid)
    .update({ [field]: namefile });

  if (!cek) {
    res.status(400).json({ message: "Error Update DB" });
  }
  return res.status(200).json({ message: "Data Berhasil" });
};
