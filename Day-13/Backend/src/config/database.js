const mongoose=require("mongoose")

async function connectToDb() {
    await mongoose.connect(process.env.MONGO_URL)

    .then(()=>{
        console.log("conect to database");
        
    })
}

module.exports=connectToDb