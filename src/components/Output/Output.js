import React from 'react'
import styles from './Output.module.css'

export default function Output(props) {
    return (
        <div className={styles.wrapper}>
            <div>
                <h3>{props.title}</h3>
                / person
            </div>
            <h2>${props.amount}</h2>
        </div>
    )
}