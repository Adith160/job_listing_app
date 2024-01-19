const express = require('express')
const db = require('./config/DataBase')
const app = express();

//app.use(db);

app.get('/health', (req,res)=>{
    res.json({service:"Job Listing App",
            status:"active",
            time: new Date(),})
})

const port = process.env.PORT || 8000;
app.listen(port, (req,res)=>{
    console.log("Server Started Successfully!!!!")
})