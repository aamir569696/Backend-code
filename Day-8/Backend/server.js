require("dotenv").config()

const app=require("./src/app")
const connectTodb=require("./src/confit/Database")

connectTodb()

app.listen(3000,()=>{
    console.log("server is running on port 3000");
    
})

