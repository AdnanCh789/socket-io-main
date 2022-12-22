const { User } = require("../models/userModel");
const catchAsync = require("../utils/catchAsync");

exports.getUserById = async (req, res, next) => {
  res.send({ user: req.profile });
  next();
};

exports.updateUserById = catchAsync(async (req, res) => {
  // const user = await User.findByIdAndUpdate(
  //   { _id: req.profile._id },
  //   { $set: req.body },
  //   { $new: true }
  // );
  // await user.save();
  // const token = user.generateAuthToken();
  // res
  //   .header("x-auth-token", token)
  //   .header("access-control-expose-headers", "x-auth-token")
  //   .send({ user: req.body });
});

exports.userById = async (req, res, next, id) => {
  const user = await User.findById(id);
  if (!user) return res.status(400).send("No user found..");
  req.profile = user;
  next();
};
