const express=require("express")
const postRouter=express.Router()
const postController=require('../controller/post.controller')
const multer  = require('multer')
const upload=multer({storage:multer.memoryStorage()})

postRouter.post('/',upload.single('image'),postController.createPostController)

// get api

postRouter.get('/', postController.getPostController)

postRouter.get('/detail/:postId' , postController.getPostDetail)


module.exports=postRouter