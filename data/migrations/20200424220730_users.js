exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments();
      table.string("email", 128).notNullable().unique();
      table.string("username", 128).notNullable().unique();
      table.string("password", 128).notNullable();
    })
    .createTable("favorite", (table) => {
      table.increments("f_id");
      table.string("backdrop_path", 255).notNullable();
      table.integer("id").notNullable();
      table.string("original_language", 255).notNullable();
      table.string("original_title", 255);
      table.float("popularity");
      table.string("overview", 255);
      table.string("poster_path", 255);
      table.string("title", 255);
      table.float("vote_average");
      table.integer("vote_count");
    })
    .createTable("user_movie", (table) => {
      table.increments();
      table
        .integer("movie_id")
        .unsigned()
        .references("favorite.f_id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .integer("user_id")
        .unsigned()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("user_movie")
    .dropTableIfExists("favorite")
    .dropTableIfExists("users");
};

// { favorite_movie: "resident evil", user_id: 1 },
// { favorite_movie: "resident evil 2", user_id: 1 },
// { favorite_movie: "monsters", user_id: 2 },
// { favorite_movie: "coco", user_id: 1 },
// { favorite_movie: "zombies", user_id: 1 },
// { favorite_movie: "resident evil 5", user_id: 4 },
// { favorite_movie: "the originals", user_id: 3 },
// { favorite_movie: "flash", user_id: 4 },
// { favorite_movie: "the walking dead", user_id: 4 },
// { favorite_movie: "the avengers", user_id: 3 },
// { favorite_movie: "up", user_id: 2 },

// {
//    email: "example@gmail.com",
//       username: "juan1",
//          password: "juanpass",
//       // favorite_id: 1,
//     },
// {
//    email: "example1@gmail.com",
//       username: "juan2",
//          password: "juanpass",
//       // favorite_id: 1,
//     },
// {
//    email: "example2@gmail.com",
//       username: "juan5",
//          password: "juanpass",
//       // favorite_id: 7,
//     },
// {
//    email: "example3@gmail.com",
//       username: "juan3",
//          password: "juanpass",
//       // favorite_id: 3,
//     },
