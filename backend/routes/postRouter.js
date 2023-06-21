//? EXPRESS
const express = require("express");
const postRouter = express.Router();

//? CONTROLLERS
const getColorPalette = require("../controllers/getColorPalette");

postRouter.use(express.json());

// postRouter.post("/", getColorPalette);

module.exports = postRouter;