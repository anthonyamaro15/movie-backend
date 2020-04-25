exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("email", 128).unique("email").notNullable();
      table.string("username", 128).unique("username").notNullable();
      table.string("password", 128).notNullable();
    })
    .createTable("favorite", (table) => {
      table.increments();
      table.string("favorite_movie");
      table.integer("user_id").notNullable().unsigned().references("users.id");
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("favorite").dropTableIfExists("users");
};
