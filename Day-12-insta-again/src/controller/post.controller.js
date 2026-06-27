const postModel = require("../modle/post.modle");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const { Folders } = require("@imagekit/nodejs/resources.js");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);

  const token = req.cookies?.token;

  // FIXED: Checked for both missing token AND literal string "undefined"/"null"
  if (!token || token === "undefined" || token === "null") {
    return res.status(401).json({
      message: "Token not provided. Unauthorized access.",
    });
  }

  // FIXED: Wrap in a try/catch block so the server NEVER crashes on invalid tokens
//   const decoded = jwt.verify(token, process.env.JWT_SECRET);
//      console.log(decoded);
let decoded=null
  try {
     decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log(decoded);
    // req.user = decoded;
  } catch (err) {
    return res.status(403).json({
      message: "Invalid or expired token.",
    });
  }

  console.log(decoded)

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder:'instagram-project'
  });

const post=await postModel.create({
    caption:req.body.caption,
    imageurl:file.url,
    user:decoded.id
})

  return res.status(201).json({ message: "Post created successfully", post });
}
// res.send(file)
//    console.log(file);
// res.status(200).json({
//     message:"upload successful",
//     url:file.url
// })

module.exports = {
  createPostController,
};
