//import React, { useState } from 'react'
import styles from './JobEdit.module.css'
import Header from '../Header/Header'
import mnyIcon from '../../assets/icons/ph--money-fill.svg'
import calIcon from '../../assets/icons/calender.svg'
import google from '../../assets/icons/Google.png'
import { useEffect, useState } from 'react'
import { getOneJob } from '../../api/jobs'

function JobEdit() {
  // const [signed, setSigned] = useState(false); 
  const signed= false;
  const jobId= window.location.pathname?.split("/").slice(-1)[0];
  const [data, setData] = useState(true);
  
  useEffect(() => {
    const fetchJobDetails = async () => {
        if (!jobId) return; // If jobId is not set, do nothing
        try {
            const response = await getOneJob(jobId); // Assuming getOneJob is an async function that fetches job details
            setData(response); // Update the state with the fetched data
            console.log(response); // Log the fetched data
        } catch (error) {
            console.error('Error fetching job details:', error);
        }
    };

    fetchJobDetails();
}, [jobId, setData]); 

  return (
    <div className={styles.mainContainer}>
          <Header />  
          {data ? ( <>
          <div className={styles.compName}> <h2>{data?.info}</h2></div>
          
          <div className={styles.jobContainer}>
             
             <div className={styles.part1}> <span className={styles.span1}>3d ago . {data?.jobType} {data?.remote} <img src= {google} alt='logo' /> &nbsp;&nbsp; {data?.companyName}</span> </div>

             <div className={styles.part2}>
              <h1 className={styles.title}>{data?.position}</h1>
              {signed && <button className={styles.editBtn} name='jobEdit'>Edit Job</button>}
             </div>

             <div className={styles.part3}>
             <span className={`${styles.span1} ${styles.redFont}`}>{data?.location}</span>
             <div className={styles.stipSpan}>
              <span className={styles.stipend}><img src= {mnyIcon} alt='stipend' /> Stipend 
              <p>Rs {data?.salary} /month</p></span>
              <span className={styles.stipend}><img src= {calIcon} alt='Duration' /> Duration 
              <p>6 Months</p></span>
              </div>
             </div>

             <div className={styles.part4}>
              <h4>About company</h4>
              <p className={styles.abt}> {data?.about}</p>
             </div>

             <div className={styles.part4}>
             <h4>About the job/internship</h4>
             <p className={styles.abt}> {data?.desc}</p>
             </div>

             <div className={styles.part5}>
             <h4>Skills</h4>
             <div className={styles.skillDiv}>
             {data?.skills.map((skill) => (
    <label className={styles.skills} key={skill}>{skill}</label>
))}

              </div>
             </div>

             <div className={styles.part4}>
             <h4>Additional Information</h4>
             <p className={styles.abtComp}> {data?.info}</p>
             </div>
          </div>
          </>): ""}
    </div>
  )
}

export default JobEdit