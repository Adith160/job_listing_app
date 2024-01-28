import React from 'react';
import Login from '../../components/Login/Login';
import styles from './LoginPage.module.css';
import loginImg from '../../assets/images/loginImage.png';

function LoginPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.registerForm}>
        <Login />
      </div>
      <div className={styles.img}>
        <img src={loginImg} alt="Login" />
        <span className={styles.overlayText}>Your Personal Job Finder</span>
      </div>
    </div>
  );
}

export default LoginPage;
