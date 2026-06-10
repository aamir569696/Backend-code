 const express= require("express");

 const app=express()

 app.get('/',(req,res)=>{
    res.send("Hello Amir Khan")
 })

  app.get('/about',(req,res)=>{
    res.send("This is About page")
 })

 app.listen(3000)