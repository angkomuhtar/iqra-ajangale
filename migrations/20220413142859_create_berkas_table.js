exports.up = function (knex) {
  return knex.schema
    .dropTableIfExists("berkas")
    .createTable("berkas", (table) => {
      table.increments("id").primary();
      table.integer("pegawai").unsigned();
      table.string("akta_kelahiran_anak", 70);
      table.string("akta_kematian", 70);
      table.string("akta_nikah", 70);
      table.string("daftar_susunan_keluarga", 70);
      table.string("ijazah_transkrip", 70);
      table.string("karpeg", 70);
      table.string("ktp", 70);
      table.string("kartu_keluarga", 70);
      table.string("kgb", 70);
      table.string("konversi_nip", 70);
      table.string("norek", 70);
      table.string("npwp", 70);
      table.string("photo3x4", 70);
      table.string("pengantar_pimpinan", 70);
      table.string("pembebasan_jabatan_fungsional", 70);
      table.string("latpim", 70);
      table.string("cpns", 70);
      table.string("kenaikan_pangkat", 70);
      table.string("kenaikan_pangkat_pimpinan", 70);
      table.string("ket_kuliah", 70);
      table.string("mutasi_jabatan", 70);
      table.string("sk_pangkat", 70);
      table.string("pelantikan_terakhir", 70);
      table.string("pengangkatan_jabatan", 70);
      table.string("pns", 70);
      table.string("skp_1tahun", 70);
      table.string("skp_2tahun", 70);
      table.string("stlud", 70);
      table.string("anak_kandung", 70);
      table.string("penyataan_pelantikan", 70);
      table.string("tidak_pernah_pidana", 70);
      table.string("tidak_sedang_pidana", 70);
      table.timestamps(true, true);

      table
        .foreign("pegawai")
        .references("id")
        .inTable("pegawai")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("berkas");
};
