const followModle = require('../modle/follow.modle')
const userModel=require('../modle/user.modle')

async function followuserController(req,res) {
    
    const followerUsername=req.user.username
    const followeeUsername=req.params.username

    if(followeeUsername==followerUsername){
        res.status(400).json({
            message:'you cannot follow yourself'
        })
    }

    const isAlreadyFollowing=await followModle.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })

    if(isAlreadyFollowing){
        res.status(200).json({
            message:`you already following ${followeeUsername}`,
            follow:isAlreadyFollowing
        })
    }

    const followRecord=await followModle.create({
        follower:followerUsername,
        followee:followeeUsername
    })

    res.status(201).json({
        message:`you are now following ${followeeUsername}`,
       follow: followRecord
    })
}

async function unFollowuserController(req,res) {
    const followerUsername=req.user.username
    const followeeUsername=req.params.username
    

    const isuserFollowing=await followModle.findOne({
        follower:followerUsername,
        followee:followeeUsername
    })

    if(!isuserFollowing){
        return res.status(200).json({
            message:`you are not following ${followeeUsername}`
        })
    }
 
    await followModle.findByIdAndDelete(isuserFollowing._id)
     res.status(200).json({
        message:`you have unfollowed ${followeeUsername}`
     })

}

module.exports={
    followuserController,
    unFollowuserController
}