const mongoose=require("mongoose")

function connectTodb() {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("Connect to Db");
        
    })
}

module.exports=connectTodb