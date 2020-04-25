const express = require("express");
const User = require("./user-model");

const route = express.Router();

route.get("/", (req, res) => {
  User.find()
    .then((users) => {
      res.status(200).json(users);
    })
    .catch(({ error, message }) => {
      res.status(400).json({ error, message });
    });
});

route.get("/favorites/:id", (req, res) => {
  const { id } = req.params;
  User.getFavMovies(id)
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch(({ error, message }) => {
      res.status(404).json({ error, message });
    });
});

module.exports = route;
