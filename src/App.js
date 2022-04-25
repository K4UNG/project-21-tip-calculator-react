import { useState } from 'react'
import styles from './App.module.css'
import TipInput from './components/TipInput/TipInput'
import TipOutput from './components/TipOutput/TipOutput'

function App() {
   const [inputData, setInputData] = useState({
    bill: '',
    people: '',
    percent: ''
  })
  return (
    <div className={styles.App}>
      <h1 className={styles.heading}>spli<br/>tter</h1>

      <div className={styles.wrapper}>
        <TipInput data={inputData} setData={setInputData} />
        <TipOutput data={inputData} setData={setInputData} />
      </div>
    </div>
  );
}

export default App;
