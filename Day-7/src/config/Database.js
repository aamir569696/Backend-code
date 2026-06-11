const mongoose=require("mongoose")

function connectToDb() {
    mongoose.connect("mongodb://aamir569696_db_user:HRqNjg5ILI4Z8Mzf@ac-pcgv9ic-shard-00-00.mqoz9ii.mongodb.net:27017,ac-pcgv9ic-shard-00-01.mqoz9ii.mongodb.net:27017,ac-pcgv9ic-shard-00-02.mqoz9ii.mongodb.net:27017/?ssl=true&replicaSet=atlas-88uxw2-shard-0&authSource=admin&appName=Cluster0/")

    .then(()=>{
        console.log("connect To database");
        
    })
}
module.exports=connectToDb