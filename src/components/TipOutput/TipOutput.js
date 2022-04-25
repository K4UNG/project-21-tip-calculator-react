import styles from "./TipOutput.module.css";
import Output from "../Output/Output";

export default function TipOutput(props) {
    function reset() {
        props.setData({
            bill: '',
            people: '',
            percent: ''
        })
    }
  let { bill, people, percent } = props.data;
  let [tip, total] = [0, 0];
  let valid = false;
  if (bill > 0 && people > 0 && percent > 0) {
    valid = true;
    tip = (bill * percent) / (100 * people);
    total = (bill + tip * people) / people;
  }
  return (
    <div className={styles.wrapper}>
      <Output title={"Tip Amount"} amount={tip.toFixed(2)} />
      <Output title={"Total"} amount={total.toFixed(2)} />
      <button onClick={reset} className={`${styles.reset} ${!valid && styles.invalid}`}>
        reset
      </button>
    </div>
  );
}
