import express, { response } from "express";

import {
  getAllMovies,
  CreateNewMovieData,
  deleteMovieData,
  getallMoviesById,
  updateMovieData,
} from "../controllers/movies.controller.js";

import { auth } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.route("/").get(getAllMovies).post(CreateNewMovieData);

router
  .route("/:movieId")
  .get(getallMoviesById)
  .put(updateMovieData)
  .delete(deleteMovieData);

// router.post("", CreateNewMovieData);
// router.put("/:movieId", updateMovieData);
// router.delete("/:movieId", deleteMovieData);

export default router;
