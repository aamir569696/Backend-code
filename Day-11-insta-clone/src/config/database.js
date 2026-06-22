const mongoose=require("mongoose")

async function connectToDb() {
    await mongoose.connect("mongodb://amirKhan:K9tIKvNkYpmGV20o@ac-wcpp9zs-shard-00-00.mhqpzdm.mongodb.net:27017,ac-wcpp9zs-shard-00-01.mhqpzdm.mongodb.net:27017,ac-wcpp9zs-shard-00-02.mhqpzdm.mongodb.net:27017/?ssl=true&replicaSet=atlas-ws5m93-shard-0&authSource=admin&appName=Cluster0")

    .then(()=>{
        console.log('conect to db');
        
    })
}

module.exports=connectToDb