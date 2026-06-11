const mongoose=require("mongoose")

function connectToDb() {
    mongoose.connect("day-7 connection string url")

    .then(()=>{
        console.log("connect To database");
        
    })
}
module.exports=connectToDb