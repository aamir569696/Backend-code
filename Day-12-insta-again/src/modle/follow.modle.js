const mongoose= require('mongoose')


const followSchema=new mongoose.Schema({
    follower:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,'follower is required']
    },
    following:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,'Following is required']
    },
    followee:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user',
        required:[true,'followee is required']
    }
},{
    timestamps:ture
})

const followModle=mongoose.model('follow',followSchema)

module.exports=followModle