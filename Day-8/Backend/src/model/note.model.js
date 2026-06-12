const mongoose=require("mongoose")

const notesScheme=new mongoose.Schema({
    title:String,
    description:String
})

const noteModel=mongoose.model("KhanG" ,notesScheme)

module.exports=noteModel