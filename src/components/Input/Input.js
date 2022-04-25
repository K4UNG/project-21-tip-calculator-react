import React from "react";
import styles from "./Input.module.css";

export default function Input(props) {
  return (
    <React.Fragment>
      <label className={styles.label}>{props.label}</label>
      <div className={styles["input__control"]}>
        <img className={styles.icon} src={`./images/${props.icon}`} alt={props.icon} />
        {props.value === 0 && (
          <span className={styles.error}>Can't be zero</span>
        )}
        <input
          className={`${styles.input} ${props.value === 0 && styles.invalid}`}
          type={props.type}
          value={props.value}
          placeholder={props.placeholder}
          name={props.name}
          min={props.min}
          onChange={(e) => {
            if (parseFloat(e.target.value) < 0) {
              return
            }
            props.onChange((prevState) => {
              return {
                ...prevState,
                [e.target.name]: e.target.value
                  ? parseFloat(e.target.value)
                  : "",
              };
            });
          }}
        />
      </div>
    </React.Fragment>
  );
}
