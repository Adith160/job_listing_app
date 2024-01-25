const express = require('express');
const router = express.Router();
const jobValidation = require('../validations/jobValidation');
const Job = require('../model/jobModel');
const verifyJwt = require('../middleware/jwtMiddleware')

router.post('/jobs', verifyJwt,async (req,res) => {
    try {
        // Validate the request body using Joe
        const validationResult = jobValidation.validate(req.body);

        // Check if validation passed
        if (validationResult.error) {
            return res.status(400).json({ error: validationResult.error.message });
        }

        const newJob = new Job(req.body);
        await newJob.save();

        res.status(201).json({message : "Job Created Successfully"});
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
