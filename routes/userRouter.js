const express = require("express");
const router = express.Router();
const allUsers = require("../controllers/userController");

router.get("/", (req, res) => {
  res.send({ response: "Server is up and running.", allUsers }).status(200);
});

module.exports = router;
