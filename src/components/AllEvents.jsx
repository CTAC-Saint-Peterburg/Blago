import styles from "../stylesComponents/AllEvents.module.css";
import CoinFlipCard from "./secundaryComponents/Coinflipcard";
export default function AllEvents() {
  return (
    <div className={styles.allevents}>
      <div className={styles.alleventsHeader}>
        <h1 className={styles.alleventsHeaderh1}>All events</h1>
      </div>
      <div className={styles.alleventsalldata}>
        <CoinFlipCard />
        <CoinFlipCard />
        <CoinFlipCard />
        <CoinFlipCard />
        <CoinFlipCard />
        <CoinFlipCard />
        <CoinFlipCard />
        <CoinFlipCard />
      </div>
    </div>
  );
}
