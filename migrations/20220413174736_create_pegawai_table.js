/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("pegawai", (table) => {
    table.increments("id").primary();
    table.string("name", 35);
    table.string("nip", 35);
    table.string("photo");
    table.date("tgl_lahir");
    table.string("jenkel");
    table.integer("jabatan").unsigned();
    table.date("tmt_jabatan");
    table.integer("pangkat").unsigned();
    table.date("tmt_pangkat");
    table.integer("unit_kerja").unsigned();
    table.integer("eselon").unsigned();
    table.date("gaji_berkala");
    table.timestamps(true, true);

    table.foreign("jabatan").references("id").inTable("jabatan");
    table.foreign("pangkat").references("id").inTable("pangkat");
    table.foreign("unit_kerja").references("id").inTable("unit_kerja");
    table.foreign("eselon").references("id").inTable("eselon");
  });
};
exports.down = function (knex) {
  return knex.schema.dropTable("pegawai");
};
