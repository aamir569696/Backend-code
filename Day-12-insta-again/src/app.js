const express=require("express")
const cookieParser=require("cookie-parser")
const authRouter=require('./router/auth.routes')
const postRouter=require('./router/post.routes')
const userRouter=require('./router/user.routes')
const app =express()
app.use(express.json())
app.use(cookieParser())
app.use('/api/auth',authRouter)
// app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)
//followapi
app.use('/api/user',userRouter)

//unfollowapi

app.use('/api/user',userRouter)

module.exports=app