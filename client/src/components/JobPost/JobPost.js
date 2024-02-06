import React, { useState } from 'react';
import styles from './JobPost.module.css';
import { useNavigate } from 'react-router-dom';
import { postJob } from '../../api/jobs'

function JobPost() {
  const [jobData, setJobData] = useState({
    companyName: '',
    logoUrl: '',
    position: '',
    salary: '',
    jobType: '',
    remote: '',
    location: '',
    desc: '',
    about: '',
    skills: '',
    info: '',
  });

  const [errors, setErrors] = useState({
    companyName: '',
    position: '',
    salary: '',
    jobType: '',
    remote: '',
    location: '',
    desc: '',
    about: '',
    skills: '',
    info: '',
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
  
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error when the user makes a change
    }));
  };
  

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};

    if (jobData.companyName.trim() === '') {
      newErrors.companyName = 'Field Is Required';
    }

    if (jobData.about.trim() === '') {
      newErrors.about = 'Field Is Required';
    }

    if (jobData.desc.trim() === '') {
      newErrors.desc = 'Field Is Required';
    }

    if (jobData.info.trim() === '') {
      newErrors.info = 'Field Is Required';
    }

    if (jobData.jobType.trim() === '') {
      newErrors.jobType = 'Field Is Required';
    }

    if (jobData.location.trim() === '') {
      newErrors.location = 'Field Is Required';
    }

    if (jobData.position.trim() === '') {
      newErrors.position = 'Field Is Required';
    }

    if (jobData.salary.trim() === '') {
      newErrors.salary = 'Field Is Required';
    }

    // Update the errors state
    setErrors(newErrors);

    const resetForm = () => {
      setJobData({
        companyName: '',
        logoUrl: '',
        position: '',
        salary: '',
        jobType: '',
        remote: '',
        location: '',
        desc: '',
        about: '',
        skills: '',
        info: '',
      });
    };

    console.log(jobData);

    if (Object.keys(newErrors).length === 0) {
      // Split skills by commas and store them in an array
      const skillsArray = jobData.skills.split(',').map(skill => skill.trim());
      const response = await postJob({ ...jobData, skills: skillsArray });
      if (response) {
        console.log("success");
      }
      resetForm();
      // navigate("/job-details");
    }
};

  return (
    <div className={styles.registerContent}>
      <h1>Add job description</h1>

      <form onSubmit={handleUserSubmit} autoComplete='off'>
       
        <input name='companyName' placeholder='Enter your company name here' type='text' value={jobData.companyName} onChange={handleOnChange} autoComplete="off" />
        {errors.companyName && <div className={styles.errorText}>{errors.companyName}</div>}

        <label> Add logo URL </label>
        <input name='logoUrl' placeholder='Enter the link' type='text' value={jobData.logoUrl} onChange={handleOnChange} autoComplete="off" />
        
        <label> Job Position </label><input name='position' placeholder='Enter Job Position' type='text' value={jobData.position} onChange={handleOnChange} autoComplete="off"></input>
        {errors.position && <div className={styles.errorText}>{errors.position}</div>}

        <label> Monthly salary </label><input name='salary' placeholder='Enter Amount in rupees' type='number' value={jobData.salary} onChange={handleOnChange} autoComplete="off"></input>
        {errors.salary && <div className={styles.errorText}>{errors.salary}</div>}

        <label> Job Type </label>
        <select id="jobType" name='jobType' value={jobData.jobType} onChange={handleOnChange}>
        <option value="" disabled selected>Select</option>
        <option value="Permanent">Permanent</option>
        <option value="Part time">Part time</option>
        </select>
        {errors.jobType && <div className={styles.errorText}>{errors.jobType}</div>}

        <label> Remote/office </label>
        <select id="remote" name='remote' value={jobData.remote} onChange={handleOnChange}>
        <option value="" disabled selected>Select</option>
        <option value="Remote">Remote</option>
        <option value="Office">Office</option>
        </select>
        {errors.remote && <div className={styles.errorText}>{errors.remote}</div>}

        <label> Location </label><input name='location' placeholder='Enter location' type='text' value={jobData.location} onChange={handleOnChange} autoComplete="off"></input>
        {errors.location && <div className={styles.errorText}>{errors.location}</div>}

        <label> Job Description </label>
        <textarea name='desc' placeholder='Type the job description' value={jobData.desc} onChange={handleOnChange} autoComplete="off"></textarea>
        {errors.desc && <div className={styles.errorText}>{errors.desc}</div>}

        <label> About Company </label><input name='about' placeholder='Type about your company' type='text' value={jobData.about} onChange={handleOnChange} autoComplete="off"></input>
        {errors.about && <div className={styles.errorText}>{errors.about}</div>}

        <label> Skills Required </label><input name='skills' placeholder='Enter the must have skills' type='text' value={jobData.skills} onChange={handleOnChange} autoComplete="off"></input>
        {errors.skills && <div className={styles.errorText}>{errors.skills}</div>}

        <label> Information </label><input name='info' placeholder='Enter the additional informations' type='text' value={jobData.info} onChange={handleOnChange} autoComplete="off"></input>
        {errors.info && <div className={styles.errorText}>{errors.info}</div>}
        <div className={styles.Buttons}>
          <button className={styles.submitBtn} style={{ backgroundColor: 'white', color: 'black', border: '0.5px solid grey' }} type='button'>Cancel</button>
          <button className={styles.submitBtn} type='submit'>+Add Job</button>
        </div>
      </form>
      <h5 className={styles.grey}>Already have an account? <button className={styles.signIn}>Sign In</button> </h5>
    </div>
  );
}

export default JobPost;