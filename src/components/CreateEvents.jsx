import { useState } from "react";
import styles from "../stylesComponents/CreateEvents.module.css";
import Optioncard from "./secundaryComponents/Optioncard";
export default function CreateEvents() {
  const [mainOptions, setMainOptions] = useState([
    { name: "РФПЛ" },
    { name: "ЧМ Мира" },
    { name: "Лига Чемпионов" },
  ]);
  return (
    <div className={styles.createevents}>
      <div className={styles.createeventsHeader}>
        <h1 className={styles.createeventsHeaderH1}>CreateEvents</h1>
      </div>
      <form onSubmit={() => alert("создать событие")}>
        <label>
          событие:
          <select name="event" required>
            <option>нажми на меня</option>
            {mainOptions.map((unit, index) => {
              return <option key={index}>{unit.name}</option>;
            })}
          </select>
        </label>

        <Optioncard />

        <button>создать событие</button>
      </form>
    </div>
  );
}
