const mongoose=require("mongoose")

const userScheme=new mongoose.Schema({
    username:{
        type:String,
        unique:[true,'username alredy exist'],
        required:  [true,"username is required"]
    },
    email:{
        type:String,
        unique:[true,"this email already exist"],
        required:[true,'email is required']
    },
    password:{
        type:String,
        required:[true,'password is required']
    },
    bio:String,
    profile_pick:{
        type:String,
        default:"https://ik.imagekit.io/iquubkpgc/default%20profile%20image.png"
    }
});

const userModel=mongoose.model("instagram", userScheme)

module.exports=userModel;
