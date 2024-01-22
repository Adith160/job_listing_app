const express = require('express')
const db = require('./config/DataBase')
const authRouter = require('./routes/auth')

const app = express();

//call bodyParser
app.use(express.json())

app.get('/health', (req,res)=>{
    res.json({service:"Job Listing App",
            status:"active",
            time: new Date(),})
})

app.use('/auth',authRouter)

//if page not found 
app.use((req,res,next)=>{
    const err = new Error("Something went wrong! Please try after some time")
    err.status = 401
    next(err)
})

//error handler middleware
app.use((err,req,res,next)=>{
    res.status(err.status).send({
        error: {
            status: err.status || 500,
            message : err.message, 
        }
})
 
})

const port = process.env.PORT || 8000;
app.listen(port, (req,res)=>{
    console.log("Server Started Successfully!!!!")
})