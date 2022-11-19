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
      <form
        className={styles.createeventsForm}
        onSubmit={() => alert("создать событие")}
      >
        <label className={styles.createeventsLabel}>
          событие:
          <select name="event" required>
            <option>нажми на меня</option>
            {mainOptions.map((unit, index) => {
              return <option key={index}>{unit.name}</option>;
            })}
          </select>
        </label>

        <Optioncard />

        <button className={styles.createeventsButton}>создать событие</button>
      </form>
    </div>
  );
}
