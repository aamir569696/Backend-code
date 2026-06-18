const mongoose=require("mongoose")

function connectToDb() {
    mongoose.connect("Day-10 connection string")
    .then(()=>{
        console.log("connect To db");
        
    })
}

module.exports=connectToDb