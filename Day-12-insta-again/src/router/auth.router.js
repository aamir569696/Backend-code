const express=require("express")
const userMOdel=require("../modle/user.modle")
const authRouter=express.Router()


authRouter.post("/register",async(req,res)=>{
    const {username,email,password,bio,profileImage}=req.body

   const isuserAlreadyExist=await userMOdel.findOne({
  
$or:[
    {username},
    {email}
]

   })

   if(isuserAlreadyExist){
    return res.status(409).json({
        message:'user is already exist' + (isuserAlreadyExist.email==email ? "user is exist by email" : "user is exist by username")
    })
   }
   
  
  
})