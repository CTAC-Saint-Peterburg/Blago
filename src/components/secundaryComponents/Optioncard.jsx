import style from "./Optioncard.module.css";
export default function Optioncard() {
  console.log(style);
  return (
    <div className={style.optioncard}>
      <div className={style.optioncardMain}>
        <div className={style.optioncardMainTop}>
          <img
            className={style.optioncardMainTopImg}
            src={require("./../../images/stock.jpg")}
            alt=""
          />
          <h2 className={style.optioncardMainTopH2}>unnamed</h2>
        </div>
        <div className={style.optioncardMainTop}>
          <h2 className={style.optioncardMainTopH2}>VS</h2>
        </div>
        <div className={style.optioncardMainTop}>
          <img
            className={style.optioncardMainTopImg}
            src={require("./../../images/stock.jpg")}
            alt=""
          />
          <h2 className={style.optioncardMainTopH2}>unnamed</h2>
        </div>
      </div>
    </div>
  );
}
