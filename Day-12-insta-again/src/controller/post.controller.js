const postModel=require('../modle/post.modle')
const ImageKit = require("@imagekit/nodejs")
const { toFile } = require("@imagekit/nodejs")

const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
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