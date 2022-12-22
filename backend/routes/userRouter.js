const express = require("express");
const router = express.Router();
const {
  userById,
  getUserById,
  updateUserById,
} = require("../controllers/userController");

router.get("/:userId", getUserById);
router.put("/:userId", updateUserById);
router.param("userId", userById);
module.exports = router;
