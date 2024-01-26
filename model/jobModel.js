const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    logoUrl: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    salary: {
        type: String,
        required: true,
    },
    jobType: {
        type: String,
        required: true,
    },
    remote: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    about: {
        type: String,
        required: true,
    },
    skills: {
        type: [String], // Assuming skills is an array of strings
        required: true,
    },
    info: {
        type: String,
        required: true,
    },
    userRefId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
    },
});

module.exports = mongoose.model("jobs", jobSchema);
