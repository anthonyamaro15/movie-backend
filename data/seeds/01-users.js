exports.seed = function (knex) {
  return knex("users").insert([
    {
      email: "example@gmail.com",
      username: "juan1",
      password: "juanpass",
      favorite_id: 1,
    },
    {
      email: "example1@gmail.com",
      username: "juan2",
      password: "juanpass",
      favorite_id: 1,
    },
    {
      email: "example2@gmail.com",
      username: "juan5",
      password: "juanpass",
      favorite_id: 7,
    },
    {
      email: "example3@gmail.com",
      username: "juan3",
      password: "juanpass",
      favorite_id: 3,
    },
  ]);
};
