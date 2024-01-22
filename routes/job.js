const express = require("express")
const router = express.Router();

router.post('/addjob', async (req,res)=>{

    const{companyName, logoUrl, position, salary, jobType, remote, location, desc, about, skills, info}= req.body;
    
})

module.exports = router;