const express=require("express")
const cookieParser=require('cookie-parser')
const AuthRoute=require("./routes/Auth.route")
const app = express()
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth',AuthRoute)


module.exports=app