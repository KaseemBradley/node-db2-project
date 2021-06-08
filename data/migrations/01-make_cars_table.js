// DO YOUR MAGIC
exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments("car_id"); //creates the primary key
    table.text("vin", 128).unique().notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
