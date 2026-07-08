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
        required:[true,"password is required"],
        select:false
    },
    bio:String,
    profileImage:{
        type:String,
        default:"https://ik.imagekit.io/iquubkpgc/default%20profile%20image.png"
    }
})

const userModel= mongoose.model("users_insta",userSchema)


module.exports=userModel