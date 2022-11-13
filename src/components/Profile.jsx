import styles from "../stylesComponents/Profile.module.css";
import bug from "../images/bug.svg";
import message from "../images/message.svg";
import settings from "../images/settings.svg";
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
        <div className={styles.divprofileoptions}>
          <div className={styles.divimg}>
            <img
              className={styles.imgprofile}
              src={require("../images/stock.jpg")}
              alt="image"
            />
            <h2 className={styles.h2imgprofile}>Username</h2>
          </div>
          <div className={styles.settingsimgprofile}>
            <div className={styles.settingsdiv}>
              <img src={settings} alt="sad" />
            </div>
            <div className={styles.settingsdiv}>
              <img src={message} alt="sad" />
            </div>
            <div className={styles.settingsdiv}>
              <img src={bug} alt="sad" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
