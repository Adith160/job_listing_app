const express = require('express')
const app = express();
const port = process.env.PORT || 8000;

app.get('/health', (req,res)=>{
    res.json({service:"Job Listing App",
            status:"active",
            time: new Date(),})
})

app.listen(port, (req,res)=>{
    console.log("Server Started Successfully!!!!")
})