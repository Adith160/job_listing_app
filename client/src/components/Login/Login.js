import React, { useState } from 'react'
import styles from './Login.module.css'
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../../api/auth'

function Login() {
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });


  const [errors, setErrors] = useState({
    email: '',
    password: '', 
  })

  const navigate = useNavigate();
  const handleOnChange=(e)=>{
    const { name, value} = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '', // Clear the error when the user makes a change
    }));
  }

  const handleUserSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    const newErrors = {};

    if (userData.email.trim() === '') {
      newErrors.email = 'Field Is Required';
    }

    if (userData.password.trim() === '') {
      newErrors.password = 'Field Is Required';
    }


    // Update the errors state
    setErrors(newErrors);

    const resetForm = () => {
      setUserData({
        email: '',
        password: '',
      });
    };

    if (Object.keys(newErrors).length === 0){
     
     const response = await loginUser({ ...userData })
     if(response) {
      localStorage.setItem("token", response.token);
      localStorage.setItem("name", response.name)
      setUserData({ 
      email: '',
      password: '',});
      resetForm();
      navigate("/");
    }}
  }

  const redirectToRegister = () =>{
    navigate("/register");
  }
  return (
    <div className={styles.loginContent}>
      <div className={styles.title}>
      <h1>Already have an account?</h1>
      <h5>Your personal job finder is here</h5>
      </div>
      <form className={styles.logForm} onSubmit={handleUserSubmit} >
        <input name='email' placeholder='Email' type='email' value={userData.email} onChange={handleOnChange}  autocomplete="new-password"></input>
        {errors.email && <div className={styles.errorText}>{errors.email}</div>}
        <input name='password' placeholder='Password' type='password' value={userData.password} onChange={handleOnChange}></input>
        {errors.password && <div className={styles.errorText}>{errors.password}</div>}
        
        <button className={styles.submitBtn} type='submit'>Sign In</button>
      </form>
      <h5 className={styles.grey}>Don’t have an account? <button className={styles.signUp} onClick={redirectToRegister}>Sign Up</button> </h5>
    </div>
  )
}
export default Login
