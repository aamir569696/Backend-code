const mongoose=require('mongoose')

function connectToDb() {
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log('connect to DB');
        
    })
}
module.exports=connectToDb