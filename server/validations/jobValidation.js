const Joi = require('joi');

const jobValidation = Joi.object({
    companyName: Joi.string().required(),
    logoUrl: Joi.string().required(),
    position: Joi.string().required(),
    salary: Joi.number().required(),
    jobType: Joi.string().required(),
    remote: Joi.string().required(),
    location: Joi.string().required(),
    desc: Joi.string().required(),
    about: Joi.string().required(),
    skills: Joi.array().items(Joi.string()).required(),
    info: Joi.string().required(),
    userRefId: Joi.string().required(), 
});

module.exports = jobValidation;
