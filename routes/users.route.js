import express, { response } from "express";

import { createNewUsers, loginUser } from "../controllers/users.controller.js";

const router = express.Router();

router.post("/signup", createNewUsers);

router.post("/login", loginUser);

// router.route("/").get(getAllMovies).post(CreateNewMovieData);

// router
//   .route("/:movieId")
//   .get(getallMoviesById)
//   .put(updateMovieData)
//   .delete(deleteMovieData);

// router.post("", CreateNewMovieData);
// router.delete("/:movieId", deleteMovieData);

export default router;
