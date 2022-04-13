exports.up = function (knex) {
  return knex.schema.createTable("pangkat", (table) => {
    table.increments("id").primary();
    table.string("value", 45);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("pangkat");
};
