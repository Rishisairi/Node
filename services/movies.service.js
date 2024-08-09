import { Movies } from "../entities/movies.entity.js";

async function deleteMovie(movieId) {
  return await Movies.delete({ movieId }).go();
}

async function updateMovie(existing, updateData) {
  return await Movies.put({ ...existing.data, ...updateData }).go();
}

async function CreateNewMovie(addMovie) {
  return await Movies.create(addMovie).go();
}

async function getMovieById(movieId) {
  return await Movies.get({ movieId }).go();
}

async function getMovies() {
  return await Movies.scan.go();
}

export { deleteMovie, updateMovie, CreateNewMovie, getMovieById, getMovies };
