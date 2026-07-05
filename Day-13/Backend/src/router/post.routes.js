const express=require("express")
const postRouter=express.Router()
const postController=require('../controller/post.controller')
const multer  = require('multer')
const upload=multer({storage:multer.memoryStorage()})
const identifyUser=require("../midlewares/auth.midlewares")

postRouter.post('/',upload.single('image'),identifyUser,postController.createPostController)

// get api

postRouter.get('/',identifyUser, postController.getPostController)

postRouter.get('/detail/:postId' ,identifyUser, postController.getPostDetail)


module.exports=postRouter