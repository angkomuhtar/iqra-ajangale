import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
import moment from "moment";
import db from "lib/db";

var mv = require("mv");

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  var newPath = "";
  var namefile = "";
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm({ multiples: true });

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve([fields, files]);
    });
  });
  let key = [];
  Object.keys(data[1]).map((val) => {
    key.push(val);
  });

  const pegawai = await db("pegawai").insert(data[0]);
  if (pegawai) {
    fs.mkdir(`./public/berkas/${pegawai}`, { recursive: true }, (err) => {});
    key.map((val) => {
      var oldPath = data[1][val].filepath;
      var type = data[1][val].originalFilename.split(".");
      namefile = `${val}.${type[type.length - 1]}`;
      newPath = `./public/berkas/${pegawai}/${namefile}`;
      mv(oldPath, newPath, function (err) {});
    });
    const update = await db("pegawai")
      .where("id", "=", `${pegawai}`)
      .update({
        photo: `${namefile}`,
      });
    if (update) {
      res.status(200).send({ pegawai, newPath });
    } else {
      res.status(500).end();
    }
  }
};
