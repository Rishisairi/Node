// const express = require("express");
// const cors = require("cors");
import express from "express";
import cors from "cors";
const app = express();
import moviesRouter from "./routes/movies.route.js"

const PORT = process.env.PORT || 4000;
app.use(cors());
app.use(express.json());

app.use("/movies",moviesRouter)

app.get("/", function (request, response) {
  response.send("Hello 🙋, 🌏 🎊✨🤩");
});

app.listen(PORT, () => console.log(`The server started in: ${PORT} ✨✨`));
