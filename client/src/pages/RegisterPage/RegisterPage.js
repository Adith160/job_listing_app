import React from 'react';
import Register from '../../components/Register/Register';
import styles from './RegisterPage.module.css';
import loginImg from '../../assets/images/loginImage.png';

function RegisterPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.registerForm}>
        <Register />
      </div>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" />
        <span className={styles.overlayText}>Your Personal Job Finder</span>
      </div>
    </div>
  );
}

export default RegisterPage;
