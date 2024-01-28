import React from 'react';
import Register from '../../components/JobPost/JobPost';
import styles from './JobPostPage.module.css';
import jobImg from '../../assets/images/jobPost.png';

function JobPostPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.jobPostForm}>
        <Register />
      </div>
      <div className={styles.img}>
        <img src={jobImg} alt="JobPost" />
        <span className={styles.overlayText}>Recruiter add job details here</span>
      </div>
    </div>
  );
}

export default JobPostPage;
