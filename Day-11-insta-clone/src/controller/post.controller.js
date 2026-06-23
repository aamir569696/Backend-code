const postModel=require('../model/post.modle')
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey: "private_key image kit",
})


async function createPostController(req,res){
    console.log(req.body,req.file);

    const file = await imagekit.files.upload({
        file: await toFile(Buffer.from(req.file.buffer), 'file'),
        fileName: "Test",
        
    })
    res.send(file)

       console.log(file);

    res.status(200).json({
        message:"upload successful",
        url:file.url
    })
    
}

module.exports={
    createPostController
}