/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createViewOrReplace("pensiun", function (view) {
    view.columns([
      "id_berkas",
      "id_pegawai",
      "nama",
      "nip",
      "pengantar_pimpinan",
      "daftar_susunan_keluarga",
      "tidak_pernah_pidana",
      "tidak_sedang_pidana",
      "anak_kandung",
      "ket_kuliah",
      "cpns",
      "pns",
      "kenaikan_pangkat",
      "kartu_keluarga",
      "akta_nikah",
      "akta_kematian",
      "akta_kelahiran_anak",
      "skp_1tahun",
      "mutasi_jabatan",
      "photo3x4",
    ]);
    view.as(
      knex("pegawai")
        .join("berkas", "pegawai.id", "=", "berkas.pegawai")
        .select(
          "berkas.id",
          "pegawai.id",
          "pegawai.name",
          "pegawai.nip",
          "berkas.pengantar_pimpinan",
          "berkas.daftar_susunan_keluarga",
          "berkas.tidak_pernah_pidana",
          "berkas.tidak_sedang_pidana",
          "berkas.anak_kandung",
          "berkas.ket_kuliah",
          "berkas.cpns",
          "berkas.pns",
          "berkas.kenaikan_pangkat",
          "berkas.kartu_keluarga",
          "berkas.akta_nikah",
          "berkas.akta_kematian",
          "berkas.akta_kelahiran_anak",
          "berkas.skp_1tahun",
          "berkas.mutasi_jabatan",
          "berkas.photo3x4"
        )
    );
  });
};

exports.down = function (knex) {};
