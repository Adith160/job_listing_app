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
                success: false,
            })
        }
        const emailCheck = await User.findOne({ email: email });
        const phoneCheck = await User.findOne({ phone: phone });
        
        if (emailCheck || phoneCheck) {
            let errorMessage = "";
        
            if (emailCheck) {
                errorMessage = "User Already Exist";
            } else {
                errorMessage = "Mobile Number Already Exist";
            }
        
            return res.status(409).json({
                message: errorMessage,
                success: false,
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        // await User.create({
        //     name,
        //     email,
        //     mobile,
        //     password : hashedPassword,
        // })

        const userData = new User({
            name,
            email,
            phone,
            password : hashedPassword,
        })

        const userResponse = await userData.save();

        const token = await jwt.sign({ userId : userResponse._id}, process.env.JWT_SECRET)

        res.json({message : "User Registered Successfully", token:token, name : name, success: true,})

    } catch (error) {
        console.error(error);
        res.status(500).json({ errorMessage: "Internal Server Error" ,success: false,});
    }
    
})

router.post('/login',async (req,res)=>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                message : "Invalid Credentials", 
                success: false,
            })
        }   

        const userDetail = await User.findOne({email})
        
        if(!userDetail){
            return res.status(401).json({
                message : "User Not Found", 
                success: false,
            })
        }   

        const matchedPassword = await bcrypt.compare(password, userDetail.password);


        if(!matchedPassword){
            return res.status(401).json({
                message:"Invalid Password",
                success: false,
            })
        }

        const token = await jwt.sign({userId : userDetail._id}, process.env.JWT_SECRET);

        res.status(201).json({
            message: "User Login Successfull",
            token: token,
            name: userDetail.name, 
            success: true,
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" , success: false,});
    }
})

module.exports = router;