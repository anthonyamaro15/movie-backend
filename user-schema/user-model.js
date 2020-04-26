const db = require("../data/db-config");

function add(user) {
  return db("users").insert(user);
}

function findBy(email) {
  return db("users").where(email).first();
}

function findById(id) {
  return db("users").where({ id }).first();
}

function findFavById(user_id) {
  return db("users as u")
    .join("favorite as f", "u.id", "f.user_id")
    .where({ user_id });
}

function find() {
  return db("users");
}

function getFavMovies(id) {
  return db("users as u")
    .join("favorite as f", "u.id", "f.user_id")
    .where(`u.id`, id)
    .select("f.id", "f.favorite_movie");
}

function removeFav(id) {
  return db("users as u")
    .join("favorite as f", "u.id", "f.user_id")
    .where("f.id", id)
    .select("f.favorite_movie")
    .del();
}

module.exports = {
  add,
  findBy,
  find,
  getFavMovies,
  findById,
  findFavById,
  removeFav,
};
