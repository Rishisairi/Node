import express, { response } from "express";

import { createNewUsers } from "../controllers/users.controller.js";

const router = express.Router();

router.post("/signup", createNewUsers);
// router.route("/").get(getAllMovies).post(CreateNewMovieData);

// router
//   .route("/:movieId")
//   .get(getallMoviesById)
//   .put(updateMovieData)
//   .delete(deleteMovieData);

// router.post("", CreateNewMovieData);
// router.delete("/:movieId", deleteMovieData);

export default router;
