/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createViewOrReplace("kp4", function (view) {
    view.columns([
      "id_berkas",
      "id_pegawai",
      "nama",
      "nip",
      "cpns",
      "sk_pangkat",
      "npwp",
      "ktp",
      "norek",
      "konversi_nip",
      "akta_nikah",
      "akta_kelahiran_anak",
      "ket_kuliah",
    ]);
    view.as(
      knex("pegawai")
        .join("berkas", "pegawai.id", "=", "berkas.pegawai")
        .select(
          "berkas.id",
          "pegawai.id",
          "pegawai.name",
          "pegawai.nip",
          "berkas.cpns",
          "berkas.sk_pangkat",
          "berkas.npwp",
          "berkas.ktp",
          "berkas.norek",
          "berkas.konversi_nip",
          "berkas.akta_nikah",
          "berkas.akta_kelahiran_anak",
          "berkas.ket_kuliah"
        )
    );
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {};
