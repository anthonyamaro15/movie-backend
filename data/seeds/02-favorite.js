exports.seed = function (knex) {
  return knex("favorite").insert([
    { favorite_movie: "resident evil" },
    { favorite_movie: "resident evil 2" },
    { favorite_movie: "monsters" },
    { favorite_movie: "coco" },
    { favorite_movie: "zombies" },
    { favorite_movie: "resident evil 5" },
    { favorite_movie: "the originals" },
  ]);
};
