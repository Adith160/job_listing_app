import React from 'react';
import JobPost from '../../components/JobPost/JobPost';
import styles from './JobPostPage.module.css';
import jobImg from '../../assets/images/jobPost.png';

function JobPostPage() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.halfDiv1}>
        <JobPost />
      </div>
      <div className={styles.halfDiv2}>
        <img src={jobImg} alt="JobPost" />
        <span className={styles.overlayText}>Recruiter add job details here</span>
      </div>
    </div>
  );
}

export default JobPostPage;
