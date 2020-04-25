exports.seed = function (knex) {
  return knex("favorite").insert([
    { favorite_movie: "resident evil", user_id: 1 },
    { favorite_movie: "resident evil 2", user_id: 1 },
    { favorite_movie: "monsters", user_id: 2 },
    { favorite_movie: "coco", user_id: 1 },
    { favorite_movie: "zombies", user_id: 1 },
    { favorite_movie: "resident evil 5", user_id: 4 },
    { favorite_movie: "the originals", user_id: 3 },
    { favorite_movie: "flash", user_id: 4 },
    { favorite_movie: "the walking dead", user_id: 4 },
    { favorite_movie: "the avengers", user_id: 3 },
    { favorite_movie: "up", user_id: 2 },
  ]);
};
