const express = require("express")
const User = require("../model/userModel")
const jwt = require("jsonwebtoken")
const router = express.Router();
const bcrypt = require("bcrypt")
//const authController = require('../controllers/authController')

router.post('/register', async (req,res)=>{
    try {
        const{name,email,phone,password}= req.body;

        if(!name || !email || !phone || !password){
            return res.status(400).json({
                errorMessage: "Bad Request",
            })
        }
        const emailCheck = await User.findOne({ email: email });
        const mobileCheck = await User.findOne({ mobile: mobile });
        
        if (emailCheck || mobileCheck) {
            let errorMessage = "";
        
            if (emailCheck) {
                errorMessage = "User Already Exist";
            } else {
                errorMessage = "Mobile Number Already Exist";
            }
        
            return res.status(409).json({
                message: errorMessage,
            });
        }

        const hashedPassword = await bcrypt.has(password, 10);

        // await User.create({
        //     name,
        //     email,
        //     mobile,
        //     password : hashedPassword,
        // })

        const userData = new User({
            name,
            email,
            mobile,
            password : hashedPassword,
        })

        const userResponse = userData.save();

        const token = await jwt.sign({ userId : userResponse._id}, process.env.JWT_SECRET)

        res.json({message : "User Registered Successfully", token:token, name : name, })

    } catch (error) {
        
    }
})

module.exports = router;