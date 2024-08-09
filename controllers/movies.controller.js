import {
  getMovies,
  CreateNewMovie,
  deleteMovie,
  getMovieById,
  updateMovie,
} from "../services/movies.service.js";
import { v4 as uuidv4 } from "uuid";
import { Movies } from "../entities/movies.entity.js";

async function getAllMovies(request, response) {
  try {
    const allMovies = await getMovies();
    response.send(allMovies.data);
  } catch (err) {
    response.status(500).send({ msg: "Unable to get movies" });
  }
}

async function getallMoviesById(request, response) {
  try {
    const { movieId } = request.params;
    const movie = await getMovieById(movieId);
    response.send(movie.data);
  } catch (err) {
    response.status(400).send({ msg: "Unable to retrive the movie by Id" });
  }
}

async function CreateNewMovieData(req, res) {
  try {
    const data = req.body;
    const addMovie = {
      ...data,
      movieId: uuidv4(),
    };
    await CreateNewMovie(addMovie);
    // console.log(addMovie);
    res.send(addMovie);
  } catch (err) {
    response.send({ msg: "Failed to Add the Movie" });
  }
}

async function updateMovieData(request, response) {
  const { movieId } = request.params;
  const updateData = request.body;
  const existing = await Movies.get({ movieId }).go();

  try {
    const final = await updateMovie(existing, updateData);
    console.log(final.data);
    response.send(final.data);
  } catch (err) {
    response.send({ msg: "Failed to Update the movie" });
  }
}

async function deleteMovieData(request, response) {
  const { movieId } = request.params;
  // await Movies.get({ movieId }).go();
  getMovieById(movieId);

  try {
    await deleteMovie(movieId);
    response.send("Movie deleted 🎉");
  } catch (err) {
    response.status(404).send("No such Movie 🥲");
  }
}

export {
  getAllMovies,
  getallMoviesById,
  CreateNewMovieData,
  updateMovieData,
  deleteMovieData,
};
