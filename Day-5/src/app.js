const express= require("express")

const app= express()
app.use(express.json())
const notes=[]

app.post("/notes",(req,res)=>{
    res.send("notes is created")
    notes.push(req.body)
    console.log(req.body);
    
})

app.get("/notes",(req,res)=>{
    res.send(notes)
})

app.delete("/notes/:index",(req,res)=>{
   delete notes [req.params.index]  
   res.send("notes delete succesfully");
   
})

app.patch("/notes/:index",(req,res)=>{
    notes[req.params.index].description =req.body.description
    res.status(200).json({
        message:"notes updated"
    })
})



module.exports=app