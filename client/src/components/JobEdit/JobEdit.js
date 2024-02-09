import React, { useState } from 'react'
import styles from './JobEdit.module.css'
import Header from '../Header/Header'
import mnyIcon from '../../assets/icons/ph--money-fill.svg'
import calIcon from '../../assets/icons/calender.svg'
import google from '../../assets/icons/Google.png'

function JobEdit() {
  const [signed, setSigned] = useState(false); 
  return (
    <div className={styles.mainContainer}>
          <Header />  
          <div className={styles.compName}> <h2>WordPress Development work from home job/internship at Adyaka Infosec Private Limited</h2></div>
          
          <div className={styles.jobContainer}>
             
             <div className={styles.part1}> <span className={styles.span1}>3d ago . Full Time <img src= {google} alt='logo' /> &nbsp;&nbsp; Google</span> </div>

             <div className={styles.part2}>
              <h1 className={styles.title}>WordPress Development</h1>
              {signed && <button className={styles.editBtn} name='jobEdit'>Edit Job</button>}
             </div>

             <div className={styles.part3}>
             <span className={`${styles.span1} ${styles.redFont}`}>Bangalore, India</span>
             <div className={styles.stipSpan}>
              <span className={styles.stipend}><img src= {mnyIcon} alt='stipend' /> Stipend 
              <p>Rs 25000/month</p></span>
              <span className={styles.stipend}><img src= {calIcon} alt='Duration' /> Duration 
              <p>6 Months</p></span>
              </div>
             </div>

             <div className={styles.part4}>
              <h4>About company</h4>
              <p className={styles.abt}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>

             <div className={styles.part4}>
             <h4>About the job/internship</h4>
             <p className={styles.abt}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>

             <div className={styles.part5}>
             <h4>Skills</h4>
             <div className={styles.skillDiv}>
              <label className={styles.skills}>Jshohoh</label>
              <label className={styles.skills}>Jshohoh</label>
              <label className={styles.skills}>Jshohoh</label>
              <label className={styles.skills}>Jshohoh</label>
              </div>
             </div>

             <div className={styles.part4}>
             <h4>Additional Information</h4>
             <p className={styles.abtComp}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
             </div>
          </div>
    </div>
  )
}

export default JobEdit