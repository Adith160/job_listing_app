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

const port = process.env.PORT || 8000;
app.listen(port, (req,res)=>{
    console.log("Server Started Successfully!!!!")
})