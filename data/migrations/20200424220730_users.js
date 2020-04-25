exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("email", 128).unique("email").notNullable();
      table.string("username", 128).unique("username").notNullable();
      table.string("password", 128).notNullable();
      table.integer("favorite_id").unsigned().references("favorie.id");
    })
    .createTable("favorite", (table) => {
      table.increments();
      table.string("favorite_movie");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("favorite").dropTableIfExists("users");
};
