const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({
    username:String,
    password:String,
    email:{
        type:String,
        unique:[true,"this email already exist"]

    }
})

const userModel=mongoose.model("User",userSchema)

module.exports=userModel