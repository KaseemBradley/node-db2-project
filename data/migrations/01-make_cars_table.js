// DO YOUR MAGIC
exports.up = function (knex) {
  return knex.schema.createTable("cars", (table) => {
    table.increments("car_id"); //creates the primary key
    table.text("vin", 128).unique().notNullable();
    table.text("make").notNullable();
    table.text("model").notNullable();
    table.integer("mileage").notNullable();
    table.text("title").nullable();
    table.text("transmission").nullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("cars");
};
