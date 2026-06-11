const app=require("./src/app")
const connectToDb=require("./src/config/Database")

connectToDb()

app.listen(3000,()=>{
    console.log("port is ruuning on 3000");
    
})
