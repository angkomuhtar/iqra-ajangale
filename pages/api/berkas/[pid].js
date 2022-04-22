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
    if (err)
      return res.status(400).json({ err, message: "Error When Upload File" });
  });
  const cek = await db("berkas")
    .where("pegawai", pid)
    .update({ [field]: namefile });

  if (!cek) {
    res.status(400).json({ message: "Error Update DB" });
  }
  return res.status(200).json({ message: "Data Berhasil" });

  // if (cek) {
  //   return res.status(200).json({
  //     status: "invalid",
  //     message: `Pegawai dengan NIP ${cek.nip} sudah ada`,
  //   });
  // }

  // const pegawai = await db("pegawai").insert(data[0]);
  // const berkas = await db("berkas").insert({ pegawai: pegawai });
  // const direktori = await fs.mkdir(
  //   `./public/berkas/${pegawai}`,
  //   { recursive: true },
  //   (err) => {}
  // );
  // if (pegawai) {
  //   key.map((val) => {
  //     let oldPath = data[1][val].filepath;
  //     let type = data[1][val].originalFilename.split(".");
  //     namefile = `${val}.${type[type.length - 1]}`;
  //     newPath = `./public/berkas/${pegawai}/${namefile}`;
  //     mv(oldPath, newPath, function (err) {});
  //   });
  //   const update = await db("pegawai")
  //     .where("id", "=", `${pegawai}`)
  //     .update({
  //       photo: `${namefile}`,
  //     });
  //   if (update) {
  //     res.status(200).json({
  //       status: "ok",
  //       message: "Data Berhasil Disimpan",
  //     });
  //   } else {
  //     res.status(500).end();
  //   }
  // }
};
