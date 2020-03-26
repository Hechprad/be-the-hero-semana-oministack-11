/**
 * npx knex migrate:make create_ongs > execute to create this file
 * set the table schema
 * npx knex migrate:latest
 */
exports.up = knex => {
  return knex.schema.createTable("ongs", table => {
    table.string("id").primary(); //Primary Key

    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("whatsapp").notNullable();
    table.string("city").notNullable();
    table.string("uf", 2).notNullable();
  });
};

exports.down = knex => {
  return knex.schema.dropTable("ongs");
};
