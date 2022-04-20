exports.up = function (knex) {
  return knex.schema.createViewOrReplace("kenaikan_pangkat", function (view) {
    view.columns([
      "id_berkas",
      "id_pegawai",
      "nama",
      "nip",
      "pengantar_pimpinan",
      "karpeg",
      "cpns",
      "sk_pangkat",
      "pengangkatan_jabatan",
      "penyataan_pelantikan",
      "konversi_nip",
      "skp_2tahun",
      "stlud",
      "latpim",
      "ijazah_transkrip",
      "kenaikan_pangkat_pimpinan",
      "pembebasan_jabatan_fungsional",
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
          "berkas.karpeg",
          "berkas.cpns",
          "berkas.sk_pangkat",
          "berkas.pengangkatan_jabatan",
          "berkas.penyataan_pelantikan",
          "berkas.konversi_nip",
          "berkas.skp_2tahun",
          "berkas.stlud",
          "berkas.latpim",
          "berkas.ijazah_transkrip",
          "berkas.kenaikan_pangkat_pimpinan",
          "berkas.pembebasan_jabatan_fungsional"
        )
    );
  });
};

exports.down = function (knex) {};
