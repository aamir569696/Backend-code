const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  caption: {
    type: String,
    required: [true, "caption is required"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users_insta",
    required: [true, "user id is required for creatig post"],
  },
  imageurl: {
    type: String,
    required: [true, "imageurl is required for creating post"],
  },
});

const postModel= mongoose.model('post_insta',postSchema)

module.exports=postModel
