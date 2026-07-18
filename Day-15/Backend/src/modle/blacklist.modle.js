const mongoose = require("mongoose");

const balckListSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: [true, "token is required"],
    },
  },
  { timestamps: true },
);

const blacklistModle = mongoose.model("blacklist", balckListSchema);

module.exports = blacklistModle;
