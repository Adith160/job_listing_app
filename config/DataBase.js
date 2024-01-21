const mongoose = require('mongoose')
require("dotenv").config();

const db= mongoose.connect(process.env.MONGODB_URL).then(()=>{
    console.log("DataBase Connected Successfully!!!")
}).catch((err)=>{
    console.log("Error while connecting to database", err)
})

module.exports = db