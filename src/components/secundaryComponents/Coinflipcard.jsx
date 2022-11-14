import styles from "./Coinflipcard.module.css";
export default function CoinFlipCard(props) {
  return (
    <div key={props.id}>
      <div className={styles.cardMain}>
        <div className={styles.cardProfiles}>
          <div>
            <img
              className={styles.cardProfilesImg}
              src={require("./../../images/stock.jpg")}
              alt="profile"
            />
          </div>
          <div>
            <h1 className={styles.cardProfilesH1}>VS</h1>
          </div>
          <div>
            <img
              className={styles.cardProfilesImg}
              src={require("./../../images/stock.jpg")}
              alt="profile"
            />
          </div>
        </div>
        <div>событие</div>
        <div>итог</div>
        <div>
          <button className={styles.cardButtonMore}>подробнее</button>
        </div>
      </div>
    </div>
  );
}
