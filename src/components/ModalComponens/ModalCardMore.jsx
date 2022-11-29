import { useState } from "react";
import style from "./ModalCardMore.module.css";
export default function ModalCardMore(props) {
  const [datadefault, setDatadefault] = useState({
    title: "карточка: 678",
    playerOne: { name: "kek", status: "win" },
    playerTwo: { name: "kok", status: "lose" },
    event: "Чемпионат Мира",
  });
  return (
    <>
      <div className={style.main}>
        <h1 className={style.mainTitle}>{datadefault.title}</h1>
        <div className={style.cardInfoMain}>
          <div className={style.profileBlock}>
            <img
              className={style.img}
              src={require("./../../images/stock.jpg")}
              alt=""
            />
            <h2>{datadefault.playerOne.name}</h2>
            <div className={style.profileStatus}>
              <h3
                className={
                  datadefault.playerOne.status === "win"
                    ? `${style.win}`
                    : `${style.lose}`
                }
              >
                {datadefault.playerOne.status}
              </h3>
            </div>
          </div>

          <div>
            <h2 className={style.vs}>VS</h2>
            <h4 className={style.event}>{datadefault.event}</h4>
          </div>
          <div className={style.profileBlock}>
            <img
              className={style.img}
              src={require("./../../images/stock.jpg")}
              alt=""
            />
            <h2>{datadefault.playerTwo.name}</h2>
            <div className={style.profileStatus}>
              <h3
                className={
                  datadefault.playerTwo.status === "win"
                    ? `${style.win}`
                    : `${style.lose}`
                }
              >
                {" "}
                {datadefault.playerTwo.status}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
