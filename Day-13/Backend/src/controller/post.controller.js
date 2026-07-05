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

  console.log(decoded);

  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "instagram-project",
  });

  const post = await postModel.create({
    caption: req.body.caption,
    imageurl: file.url,
    user: req.user.id,
  });

  return res.status(201).json({ message: "Post created successfully", post });
}

async function getPostController(req, res) {

  // const token = req.cookies.token;
  // let decoded;
  // try {
  //   decoded = jwt.verify(token, process.env.JWT_SECRET);
  // } catch (error) {
  //   return res.status(401).json({
  //     message: "token invalid",
  //   });
  // }

  const userId = req.user.id;

  const post = await postModel.findOne({
    user: userId,
  });
  res.status(200).json({
    message: "post fatched successfully ",
    post,
  });
}

async function getPostDetail(req, res) {

  
  let userId=req.user.id
  let postId=req.params.postId 

  let post=await postModel.findById(postId)

  if(!post){
    return res.status(404).json({
      message:'post not found'
    })
  }

  const isValiduser=post.user.toString()===userId

  if(!isValiduser){
    return res.status(403).json({
      message:'forbidden content'
    })
  }

res.status(200).json({
  message:'post fetched succesfully.',
  post
})


}

module.exports = {
  createPostController,
  getPostController,
  getPostDetail
};
