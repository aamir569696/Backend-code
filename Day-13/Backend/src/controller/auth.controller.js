const userMOdel = require("../modle/user.modle");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;
  const isuserAlreadyExist = await userMOdel.findOne({
    $or: [{ username }, { email }],
  });
  if (isuserAlreadyExist) {
    return res.status(409).json({
      message:
        "user is already exist" +
        (isuserAlreadyExist.email == email
          ? "user is exist by email"
          : "user is exist by username"),
    });
  }

  const hash = await bcryptjs.hash(password, 10);
  const user = await userMOdel.create({
    username,
    password: hash,
    email,
    bio,
    profileImage,
  });

  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user register succesfully",
    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function loginController(req, res) {
  const { username, password, email } = req.body;

  const user = await userMOdel.findOne({
    $or: [{ username: username }, { email: email }],
  }).select('+password');

  if (!user) {
    return res.status(409).json({
      message: "user not found",
    });
  }

  const ispasswordValid = await bcryptjs.compare(password, user.password);
  const token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "2d" },
  );

  res.cookie("token", token);

  res.status(200).json({
    message: "user login succesfully",

    user: {
      email: user.email,
      username: user.username,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

async function getmeauthController(req, res) {
  const userId = req.user.id;

  const user = await userMOdel.findById(userId);

  res.status(200).json({
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = {
  loginController,
  registerController,
  getmeauthController,
};
