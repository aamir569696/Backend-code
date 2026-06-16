const mongoose=require("mongoose")

const userschema=new mongoose.Schema({
    name:String,
    email:{
        type:String,
        unique:[true,"this eamil already exist"]
    },
    password:String

})

const userModel=mongoose.model("Day-10",userschema)

module.exports=userModel