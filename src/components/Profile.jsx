import styles from "../stylesComponents/Profile.module.css";
export default function Profile() {
  return (
    <div className={styles.profile}>
      <div className={styles.divprofile}>
        <h1 className={styles.profileh1}>Balance</h1>
        <h2 className={styles.profileh2}>1002¥</h2>
        <div className={styles.divbtn}>
          <button className={styles.acceptbtn}>Пополнить</button>
          <button className={styles.removebtn}>Снять</button>
        </div>
      </div>
      <div className={styles.divprofile}>
        <h1 className={styles.profileh1}>Profile</h1>
      </div>
    </div>
  );
}
