const mongoose=require("mongoose")



const postSchema=new mongoose.Schema({

    cation:{
        type:String,
        default:""
    },
    imgUrl:{
        type:String,
        required:[true,"image is required for creating post"]
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"instagram",
        required:[true,"user id is required for creating an post"]
    }

})

const postModel= mongoose.model("post", postSchema)

module.exports=postModel