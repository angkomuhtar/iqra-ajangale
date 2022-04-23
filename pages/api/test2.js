import { IncomingForm } from "formidable";
import { promises as fs } from "fs";
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

  // parsing file from multipart
  const data = await new Promise((resolve, reject) => {
    const form = new IncomingForm({ multiples: true });
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve([fields, files]);
    });
  });

  // Using trx as a transaction object:
  const trx = await db.transaction();
  const test = await trx("pegawai")
    .insert(data[0], "id")
    .then(async function (ids) {
      await trx("berkas").insert({ pegawai: ids[0] });
      await fs.mkdir(
        `./public/berkas/${ids[0]}`,
        { recursive: true },
        (err) => {
          if (err) throw err;
        }
      );
    })
    .then(trx.commit)
    .catch((err) => {
      return err;
    });

  if (trx.isCompleted()) {
    return res.status(200).send(test);
  } else {
    return res.status(301).send(test?.sqlMessage || test);
  }

  await db
    .transaction(function (trx) {
      db.insert(data[0], "id")
        .into("pegawai")
        .transacting(trx)
        .then(async (ids) => {
          const berkas = await db("berkas").insert({ pegawai: ids });
        })
        .then(trx.commit)
        .catch(trx.rollback);
    })
    .then(function (inserts) {
      console.log(inserts.length + " new books saved.");
    })
    .catch(function (error) {
      console.error(error);
    });
  return res.status(200).send("last");
  let key = [];
  Object.keys(data[1]).map((val) => {
    key.push(val);
  });
  // cek if nip exist
  const cek = await db("pegawai").where("nip", data[0].nip).first();
  if (cek) {
    return res.status(200).json({
      status: "invalid",
      message: `Pegawai dengan NIP ${cek.nip} sudah ada`,
    });
  }

  db.transaction((trx) => {
    trx("pegawai").insert(data[0]);
  });

  const pegawai = await db("pegawai").insert(data[0]);
  // const berkas = await db("berkas").insert({ pegawai: pegawai });
  try {
    fs.mkdir(`./public/berkas/${pegawai}`, { recursive: true });
  } catch (error) {
    return res.status(200).json({
      status: "invalid",
      message: `Pegawai dengan NIP ${cek.nip} sudah ada`,
    });
  }
  if (pegawai) {
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
      res.status(200).json({
        status: "ok",
        message: "Data Berhasil Disimpan",
      });
    } else {
      res.status(500).end();
    }
  }
};
