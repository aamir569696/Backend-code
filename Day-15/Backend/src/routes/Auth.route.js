const express=require('express')
const userController=require("../controller/Auth.Controller")

const router=express.Router()

router.post('/register',userController.registerController)


module.exports=router
