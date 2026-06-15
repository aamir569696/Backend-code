const express=require("express")
const userModel=require("../model/note.model")
const jwt=require("jsonwebtoken")
const authRouter=express.Router();

authRouter.post("/register",async (req,res)=>{
  const {username,password,email}=req.body;

const isemailAlreadyExist=await userModel.findOne({email})

if(isemailAlreadyExist){
    return res.status(400).json({
        message:"this email already exist"
    })
}

 const user=await userModel.create({
    username,password,email
  })

  const token=jwt.sign({
    id:user._id,
},
"jwt scret key"
)

res.cookie("jwt_token",token)

  res.status(201).json({
    message:"user data is created",
    user,
    token
  })
})


module.exports=authRouter