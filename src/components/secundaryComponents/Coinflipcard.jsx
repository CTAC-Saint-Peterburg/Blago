import styles from "./Coinflipcard.module.css";
import { useDispatch } from "react-redux";
import { modalActions } from "../../store/modalcardsSlice";
export default function CoinFlipCard(props) {
  const dispatch = useDispatch();
  function actionModal(e) {
    e.preventDefault();
    console.log(e);
    dispatch(modalActions.display());
  }
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
        <div className={styles.cardEvent}>
          <h3 className={styles.cardEventH3}>cобытие:</h3>
          <h2 className={styles.cardEventH2}>Чемпионат мира 2022</h2>
        </div>
        <div className={styles.cardResult}>
          <h3 className={styles.cardResulth3}>итог:</h3>
          <p className={styles.cardResultP}>winner</p>
          <div>
            <img
              className={styles.cardResultImg}
              src={require("./../../images/stock.jpg")}
              alt=""
            />
          </div>
        </div>
        <div>
          <button className={styles.cardButtonMore} onClick={actionModal}>
            подробнее
          </button>
        </div>
      </div>
    </div>
  );
}
