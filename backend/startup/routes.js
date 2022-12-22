const userRoutes = require("../routes/userRouter");

const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");
// const fileUpload = require("express-fileupload");

module.exports = (app) => {
  //middleware
  app.use(express.json());
  // app.use(morgan("dev"));
  // app.use(cors());
  // app.use(fileUpload());

  //routes
  app.use("/api/user", userRoutes);
};
