const mongoose=require("mongoose")


function connectToDb() {
    mongoose.connect("DataBase connection string")
    .then(()=>{
        console.log("connect To db");
        
    })
}

module.exports=connectToDb