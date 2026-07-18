const express=require('express')
const userController=require("../controller/Auth.Controller")
const Authmiddleware=require('../middlewares/Auth.middleware')
const router=express.Router()

router.post('/register',userController.registerController)

router.post('/login',userController.loginController)

router.get('/get-me',Authmiddleware.authUser,userController.getMe)

router.get('/logout',userController.logoutController)



module.exports=router
