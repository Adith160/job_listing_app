const express = require('express');
const router = express.Router();
const jobValidation = require('../validations/jobValidation');
const Job = require('../model/jobModel');
const verifyJwt = require('../middleware/jwtMiddleware')

router.post('/jobs', verifyJwt, async (req,res) => {
    try {
        // Validate the request body using Joe
        const validationResult = jobValidation.validate(req.body);

        // Check if validation passed
        if (validationResult.error) {
            return res.status(400).json({ error: validationResult.error.message , success: false,});
        }

        const newJob = new Job(req.body);
        await newJob.save();

        res.status(201).json({message : "Job Created Successfully", success: true,});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' , success: false,});
    }
});


router.put('/edit/:jobId', verifyJwt, async (req,res) => {
    try {
        // Validate the request body using Joe
        const validationResult = jobValidation.validate(req.body);

        // Check if validation passed
        if (validationResult.error) {
            return res.status(400).json({ error: validationResult.error.message , success: false,});
        }
        let jobId = req.params.jobId 
        let newData = req.body;
        await Job.updateOne({ _id : jobId},{
            $set : newData,
        })

        res.status(201).json({message : "Job Updated Successfully", success: true,});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' , success: false,});
    }
});

router.delete('/delete/:jobId', verifyJwt, async (req,res) => {
    try {
        // Validate the request body using Joe
        const validationResult = jobValidation.validate(req.body);

        // Check if validation passed
        if (validationResult.error) {
            return res.status(400).json({ error: validationResult.error.message , success: false,});
        }
        let jobId = req.params.jobId 
        await Job.findByIdAndDelete({ _id : jobId})

        res.status(201).json({message : "Job Deleted Successfully", success: true,});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' , success: false,});
    }
});

router.get('/findOne/:jobId', async (req, res) => {
    try {
        let jobId = req.params.jobId;
        
        if (!jobId) {
            return res.status(400).json({ errorMessage: "Required Job Id " , success: false,});
        }

        //send data without id , 1 if needed & 0 if not needed
        const jobData = await Job.findById(jobId);

        if (!jobData) {
            return res.status(404).json({ message: "Job not found" , success: false,});
        }

        res.status(201).json({ data: jobData , success: true,});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' , success: false,});
    }
});

//get all jobs
router.get('/all', async (req, res) => {
    try {
        const position = req.query.position || "";
        let skills = req.query.skills || null; // Use null if skills are not provided

        // Check if skills is a string, and if so, split it into an array
        if (typeof skills === 'string') {
            skills = skills.split(',').map(skill => skill.trim());
        }

        // Define the filter based on whether skills are provided or not
        const filter = skills ? { position: { $regex: position, $options: "i" }, skills: { $in: skills } }
                              : { position: { $regex: position, $options: "i" } };

        // Send data without id, 1 if needed & 0 if not needed
        const jobData = await Job.find(filter, { _id: 1, companyName: 1 });

        if (!jobData || jobData.length === 0) {
            return res.status(404).json({ message: "Job not found" , success: false,});
        }

        res.status(201).json({ data: jobData , success: true,});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' , success: false,});
    }
});






module.exports = router;
