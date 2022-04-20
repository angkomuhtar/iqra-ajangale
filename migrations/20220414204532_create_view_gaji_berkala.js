exports.up = function (knex) {
  return knex.schema.createViewOrReplace("gaji_berkala", function (view) {
    view.columns([
      "id_berkas",
      "id_pegawai",
      "nama",
      "nip",
      "pengantar_pimpinan",
      "kgb",
      "kenaikan_pangkat",
      "pelantikan_terakhir",
      "skp_1tahun",
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
          "berkas.kgb",
          "berkas.kenaikan_pangkat",
          "berkas.pelantikan_terakhir",
          "berkas.skp_1tahun"
        )
    );
  });
};

exports.down = function (knex) {};
