import { useRef } from 'react'
import styles from "./InputSelect.module.css";

const options = [
  {
    id: 1,
    percent: 5,
  },
  {
    id: 2,
    percent: 10,
  },
  {
    id: 3,
    percent: 15,
  },
  {
    id: 4,
    percent: 25,
  },
  {
    id: 5,
    percent: 50,
  },
];

export default function InputSelect(props) {
  const customRef = useRef()

  function changeHandler() {
    const value = customRef.current.value
    if (value < 0) {
      customRef.current.value = ''
      return
    }
    props.onClick(prevState => {
      return {
        ...prevState,
        percent: value ? parseFloat(value) : ''
      }
    })
  }
  return (
    <div className={styles.wrapper}>
      {options.map((option) => {
        return (
          <button
            data-tip={option.percent}
            className={`${styles.option} ${
              option.percent === parseFloat(props.percent) && styles.active
            }`}
            key={option.id}
            onClick={(e) => {
              props.onClick((prevState) => {
                customRef.current.value = ''
                if (prevState.percent === parseFloat(e.target.dataset.tip)) {
                  return {
                    ...prevState,
                    percent: "",
                  };
                }
                return {
                  ...prevState,
                  percent: parseFloat(e.target.dataset.tip),
                };
              });
            }}
          >
            {option.percent}%
          </button>
        );
      })}
      <input
        type="number"
        placeholder="Custom"
        className={styles.custom}
        min="0"
        onChange={changeHandler}
        ref={customRef}
      />
    </div>
  );
}
