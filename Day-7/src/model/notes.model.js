const mongoose=require("mongoose")

const notesSchema=new mongoose.Schema({
    title:String,
    description:String
})

const notesmodel=mongoose.model("notes",notesSchema)

module.exports=notesmodel