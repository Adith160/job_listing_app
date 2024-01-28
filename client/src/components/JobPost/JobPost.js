import React, { useState } from 'react'
import styles from './JobPost.module.css'
import { useNavigate } from 'react-router-dom';

function JobPost() {
  const [jobData, setJobData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    check: '',
  });


  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    password: '', 
    check: '', 
  })

  const navigate = useNavigate();
  const handleOnChange=(e)=>{
    const { name, value, type, checked } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error when the user makes a change
    }));
  }

  const handleUserSubmit = (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};

    if (jobData.name.trim() === '') {
      newErrors.name = 'Field Is Required';
    }

    if (jobData.password.trim() === '') {
      newErrors.password = 'Field Is Required';
    }

    if (jobData.email.trim() === '') {
      newErrors.email = 'Field Is Required';
    }

    if (jobData.phone.trim() === '') {
      newErrors.phone = 'Field Is Required';
    }

    if (!jobData.check) {
      newErrors.check = 'Check this box if you want to proceed';
    }    

    // Update the errors state
    setErrors(newErrors);

    const resetForm = () => {
      setJobData({
        name: '',
        email: '',
        phone: '',
        password: '',
        check: false,
      });
    };

    if (Object.keys(newErrors).length === 0){
     
      // add axios here

      // Additional registration logic here
      setJobData({ name: '',
      uName: '',
      email: '',
      phone: '',
      password: '',
      check: false,});
      resetForm();
      navigate("/login");
    }
  }
  return (
    <div className={styles.registerContent}>
      <div className={styles.title}>
      <h1>Create an account</h1>
      <h5>Your personal job finder is here</h5>
      </div>
      <form  onSubmit={handleUserSubmit} >
        <input name='name' placeholder='Name' type='tel' value={jobData.name} onChange={handleOnChange} autoComplete="off"></input>
        {errors.name && <div className={styles.errorText}>{errors.name}</div>}
        <input name='email' placeholder='Email' type='email' value={jobData.email} onChange={handleOnChange}  autocomplete="new-password"></input>
        {errors.email && <div className={styles.errorText}>{errors.email}</div>}
        <input name='phone' placeholder='Mobile' type='number' value={jobData.mobile} onChange={handleOnChange}></input>
        {errors.phone && <div className={styles.errorText}>{errors.phone}</div>}
        <input name='password' placeholder='Password' type='password' value={jobData.password} onChange={handleOnChange}></input>
        {errors.password && <div className={styles.errorText}>{errors.password}</div>}
        <label>
              <input
                type="checkbox"
                onChange={handleOnChange}
                name="check"
                checked={jobData.check}
                className={styles.check}
              />
              By creating an account, I agree to our terms of use and privacy policy
            </label>
            {errors.check && <div className={styles.errorText}>{errors.check}</div>}
        <button className={styles.submitBtn} type='submit'>Create Account</button>
      </form>
      <h5 className={styles.grey}>Already have an account? <button className={styles.signIn}>Sign In</button> </h5>
    </div>
  )
}
export default JobPost
