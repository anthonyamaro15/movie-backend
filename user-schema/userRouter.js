const express = require("express");
const User = require("./user-model");
const validate = require("../middlewares/validate");

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

route.get("/favorites/:id", validate.validateId, (req, res) => {
  const { id } = req.params;
  User.getFavMovies(id)
    .then((movie) => {
      res.status(200).json(movie);
    })
    .catch(({ error, message }) => {
      res.status(404).json({ error, message });
    });
});

// route.delete("/favorites/:id", validate.validateId, (req, res) => {
//   const { id } = req.params;
//   User.removeFav(id)
//     .then((movie) => {
//       console.log("here", movie);
//       res.status(200).json(movie);
//     })
//     .catch((err) => {
//       res.status(500).json({ message: "there was an error" });
//     });
// });

module.exports = route;
