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
    case "edit":
      db("pegawai")
        .where("id", pid)
        .first()
        .then((data) => {
          if (!data)
            return res
              .status(500)
              .json({ message: "data not found", data: data });
          return res.status(200).json({ message: "successfull", data: data });
        })
        .catch((err) => {
          return res.status(500).json({ message: "Server Error" });
        });
      break;
    case "update":
      const {
        name,
        nip,
        tgl_lahir,
        jenkel,
        jabatan,
        tmt_jabatan,
        pangkat,
        tmt_pangkat,
        unit_kerja,
        eselon,
        gaji_berkala,
      } = req.body;
      const update = await db("pegawai")
        .where("id", pid)
        .update({
          name,
          nip,
          tgl_lahir: moment(tgl_lahir).format("YYYY-MM-DD"),
          jenkel,
          jabatan,
          tmt_jabatan: moment(tmt_jabatan).format("YYYY-MM-DD"),
          pangkat,
          tmt_pangkat: moment(tmt_pangkat).format("YYYY-MM-DD"),
          unit_kerja,
          eselon,
          gaji_berkala: moment(gaji_berkala).format("YYYY-MM-DD"),
        });

      if (!update) {
        return res.status(500).json({ message: "hallo" });
      }
      return res
        .status(200)
        .json({ message: "Update Successfull", status: "ok", data: update });
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
