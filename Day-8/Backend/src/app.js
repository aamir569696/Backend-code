const express=require("express")
const noteModel=require("./model/note.model")
const cors=require("cors")
const app =express()

//midel wire
app.use(express.json())
app.use(cors())

//create api for creating the notes

app.post("/api/notes", async (req,res)=>{
    const {title,description}=req.body
   const note=await noteModel.create({
    title,description
})

res.status(201).json({
    message:'NOTE  created successfully',
    note
})

})

// to find the notes or fetched the notes

app.get("/api/notes",async (req,res)=>{
   const note=await noteModel.find()

   res.status(200).json({
    message :"notes fetched successfully",
    note
   })
})


//use thid api to delete notes

app.delete("/api/notes/:id", async(req,res)=>{
    const id=req.params.id

    await noteModel.findByIdAndDelete(id)

    res.status(201).json({
        message:'notes delete successfully',
        
    })
})

//Ptch api use to update the record

app.patch(("/api/notes/:id"),async (req,res)=>{
  const id=  req.params.id
  const {description}=req.body

 await noteModel.findByIdAndUpdate(id,{description})

 res.send(200).json({
    message:"note update succsefully"

 })

})




module.exports=app