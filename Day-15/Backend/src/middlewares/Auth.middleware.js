const userModle = require("../modle/User.modle");
const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(400).json({
      message: "token not provided",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SCRET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(400).json({
      message: "invalid token",
    });
  }
}

module.exports = {
  authUser,
};
