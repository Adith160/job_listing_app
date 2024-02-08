import styles from './Header.module.css';
import logo from '../../assets/icons/encrypted.svg';

function Header() {
  const signed = true;
  return (
    <div className={styles.headerDiv}>
      <h3>Jobfinder</h3>
      {signed ? (
        <div className={styles.rightComp}>
          <button className={styles.noBorder}>Logout</button>
          <h6>Hello! Recruiter </h6>
          <img src={logo} alt='logo' />
        </div>
      ) : (
        <div className={styles.rightComp}>
          <button className={styles.logBtn}>Login</button>
          <button className={styles.logBtn}>Register</button>
        </div>
      )}
    </div>
  );
}

export default Header;
