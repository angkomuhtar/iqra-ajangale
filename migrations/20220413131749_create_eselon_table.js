exports.up = function (knex) {
  return knex.schema.createTable("eselon", (table) => {
    table.increments("id").primary();
    table.string("value", 45);
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("eselon");
};
