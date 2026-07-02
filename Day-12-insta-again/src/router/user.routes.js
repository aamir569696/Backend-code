const express=require('express')
const userController=require('../controller/user.controller')
const identifyUser =require('../midlewares/auth.midlewares')
const userRouter=express.Router()


//followapi
userRouter.post('/follow/:username',identifyUser,userController.followuserController)

//unfollowApi

userRouter.post('/unfollow/:username',identifyUser,userController.unFollowuserController)


module.exports=userRouter
