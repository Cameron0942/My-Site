//? EXPRESS
const express = require("express");
const postRouter = express.Router();

//? CONTROLLERS
const getColorPalette = require("../controllers/getColorPalette");
const emailRoute = require("../controllers/emailRoute");

postRouter.use(express.json());

postRouter.post("/api", (req, res, next) => {
    console.log("POST request received");
    next(); // Call next() to pass the request to the next route handler
  });

// postRouter.post("/", getColorPalette);
postRouter.post("/api", emailRoute);

module.exports = postRouter;