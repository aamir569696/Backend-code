const express = require("express")

const app=express()
app.use(express.json())
const Notes=[]

////post method

app.post("/note",(req,res)=>{
    console.log(req.body)
    Notes.push(req.body)
    console.log(Notes);
    
    res.send("notes created")
})

//get method

app.get("/note",(req,res)=>{
    res.send(Notes)
})

///delete method

app.delete("/note/:index",(req,res)=>{
    delete Notes[req.params.index]
    res.send("notes delete successfully")
})


//patch method

app.patch("/note/:index",(req,res)=>{
    Notes[req.params.index].description= req.body.description;

    res.send("Notes update successfully")
})

module.exports=app