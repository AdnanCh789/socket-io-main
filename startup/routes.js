const userRoutes = require("../routes/userRouter");

const express = require("express");
// const morgan = require("morgan");
// const cors = require("cors");

module.exports = (app) => {
  //middleware
  app.use(express.json());
  // app.use(morgan("dev"));
  // app.use(cors());

  //routes
  app.use("/api/users", userRoutes);
};
