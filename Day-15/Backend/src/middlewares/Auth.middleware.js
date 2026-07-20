const userModle = require("../modle/User.modle");
const jwt = require("jsonwebtoken");
const radis=require('../config/cache')

async function authUser(req, res, next) {
  const token = req.cookies?.token;

  if (!token) {
    return res.status(400).json({
      message: "token not provided",
    });
  }

  const isTokenBlacklisted=await redis.get(token)

  if(isTokenBlacklisted){
    return res.status(401).json({
      message:'invalid token'
    })
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
