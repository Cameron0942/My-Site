//? EXPRESS
const express = require("express");
const postRouter = express.Router();

//? CONTROLLERS
const getColorPalette = require("../controllers/getColorPalette");
const emailRoute = require("../controllers/emailRoute");

postRouter.use(express.json());

// postRouter.post("/", getColorPalette);
postRouter.post("/", emailRoute);

module.exports = postRouter;