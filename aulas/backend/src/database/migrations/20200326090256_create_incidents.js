/**
 * npx knex migrate:make create_incidents > execute to create this file
 * set the table schema
 * npx knex migrate:latest
 */
exports.up = function(knex) {
  return knex.schema.createTable("incidents", table => {
    table.increments(); //Primary key

    table.string("title").notNullable();
    table.string("description").notNullable();
    table.decimal("value").notNullable();

    table.string("ong_id").notNullable(); //Foreign Key

    table
      .foreign("ong_id")
      .references("id")
      .inTable("ongs");
  });
};

exports.down = function(knex) {
  return knex.scheme.dropTable("incidents");
};
