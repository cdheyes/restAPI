const { Router } = require("express");

const { addMovie, listMovies, deleteMovie } = require("./movieControllers");

const movieRouter = Router();

// use http verb post to add data to our movie endpoint
movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.delete("/movie", deleteMovie);

module.exports = movieRouter;
