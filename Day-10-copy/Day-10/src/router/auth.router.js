const express = require("express");
const userModel = require("../model/user.model");
const { model } = require("mongoose");
const webToken = require("jsonwebtoken");
const crypto = require("crypto");
const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;

  const isemailAlreadyExist = await userModel.findOne({ email });

  if (isemailAlreadyExist) {
    return res.status(400).json({
      message: "this email adress already present",
    });
  }
  const hash = crypto.createHash("md5").update(password).digest("hex");
  const user = await userModel.create({
    name,
    email,
    password: hash,
  });
  const token = webToken.sign(
    {
      id: user._id,
    },
    "jwt token string",
  );

  res.cookie("webToken", token);
  res.status(201).json({
    message: "user is reegister",
    user,
    token,
  });
});

// /api/auth/login

authRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "user not exist",
    });
  }

  const ispasswordMatch =
    user.password === crypto.createHash("md5").update(password).digest("hex");

  if (!ispasswordMatch) {
    return res.status(401).json({
      message: "password invalid",
    });
  }

  const token = webToken.sign(
    {
      id: user._id,
    },
    "TWNVwke2crG4CyTwaClXKeXilD5Vg6zDDuFOpdNCrkv",
  );

  res.cookie("webtoken", token);

  res.status(200).json({
    message: "User login successfully",
    user,
  });
});

module.exports = authRouter;
