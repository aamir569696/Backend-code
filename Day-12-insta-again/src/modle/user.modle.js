const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,"Username is already exist"],
        required:[true,"username is required"]
    },
    email:{
        type:String,
        unique:[true,"email is already exist"],
        required:[true,"email is required"]
    },
    password:{
        type:String,
        required:[true,"password is required"]
    },
    bio:String,
    profile_image:{
        type:String,
        default:""
    }
})

const userMOdel= mongoose.model("users_insta",userSchema)


module.exports=userMOdel