const express=require("express")
const notesmodel=require("./model/notes.model")
const app = express()
app.use(express.json())
app.post("/notes", async(req,res)=>{
        console.log(req.body);

    const {title,description}=req.body

    const note=await notesmodel.create({
        title,description
    })
   
    res.status(201).json({
        message:'notes creating',
        note
    })

})

app.get("/notes",async (req,res)=>{
  const notes= await  notesmodel.find()
  res.status(200).json({
    message:"notes Fetched succesfully",
    notes
  })
})



module.exports=app