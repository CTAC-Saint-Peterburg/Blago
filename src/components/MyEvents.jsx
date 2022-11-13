import styles from "../stylesComponents/MyEvents.module.css";
import CoinFlipCard from "./secundaryComponents/Coinflipcard";
export default function MyEvents() {
  return (
    <div className={styles.myevents}>
      <div className={styles.myeventsheader}>
        <h1 className={styles.myeventsh1}>My events</h1>
      </div>
      <div className={styles.myeventsalldata}>
        <CoinFlipCard />
        <CoinFlipCard />
        <CoinFlipCard />
        <CoinFlipCard />
        <CoinFlipCard />
      </div>
    </div>
  );
}
