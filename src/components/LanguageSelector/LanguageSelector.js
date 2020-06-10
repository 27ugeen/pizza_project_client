import React from "react";
import styles from "./LanguageSelector.module.css";

export default function LanguageSelector() {
  return (
    <select className={styles.languageSelect}>
      <option selected value="ru">
        Рус
      </option>
      <option value="uk">Укр</option>
      <option value="en">Eng</option>
    </select>
  );
}
