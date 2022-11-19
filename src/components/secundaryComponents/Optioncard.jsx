import style from "./Optioncard.module.css";
export default function Optioncard() {
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
          <h4 className={style.optioncardMainTopH4}>
            {new Date().getHours() + ":" + new Date().getMinutes()}
          </h4>
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
      <div className={style.optioncardChoices}>
        <div className={style.optioncardChoicesField}>
          <input
            className={style.optioncardChoicesCheckbox}
            type="checkbox"
            id=""
            name="win"
          ></input>
          <h2 className={style.optioncardChoicesCheckboxH2}>победа</h2>
          <input
            className={style.optioncardChoicesCheckbox}
            type="checkbox"
            id=""
            name="lose"
          ></input>
        </div>
        <div className={style.optioncardChoicesField}>
          <input
            className={style.optioncardChoicesCheckbox}
            type="checkbox"
            id=""
            name="win"
          ></input>
          <h2 className={style.optioncardChoicesCheckboxH2}>ничья</h2>
        </div>
      </div>
    </div>
  );
}
