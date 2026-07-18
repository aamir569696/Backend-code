const mongoose = require("mongoose");

const userSchema =new mongoose.Schema({
  username: {
    type: String,
    required: [true, "username is required"],
    unique: [true, "username must be unique"]
  },
  email: {
    type: String,
    required: [true, "email is reuired"],
    unique: [true, "email must be unique"]
  },
  password: {
    type: String,
    required: [true, "password is required"],
    select:false
  },
});

const userModle=mongoose.model("user-Moodify",userSchema)

module.exports=userModle