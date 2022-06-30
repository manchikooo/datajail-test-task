import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {changeCounterAC, removeCounterAC} from "../../store/countersReducer";
import styles from './Counter.module.scss'

type CounterPropsType = {
    id: string,
    value: number,
    isFourth: boolean,
}

export const Counter = ({id, value, isFourth}: CounterPropsType) => {
    const dispatch = useDispatch()

    const incCounter = () => {
        dispatch(changeCounterAC(id, 'inc'))
    }

    const decCounter = () => {
        dispatch(changeCounterAC(id, 'dec'))
    }

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined
        if (isFourth) {
            intervalId = setInterval(() => {
                dispatch(changeCounterAC(id, 'inc'))
            }, 1000)
        }
        return () => clearInterval(intervalId)
    }, [])

    return (
        <div>
            {isFourth
                ? <div className={`${styles.counter} ${styles.withoutButtons}`}>
                    <div className={styles.value}>{value}</div>
                    <button onClick={()=> dispatch(removeCounterAC(id))}>remove</button>
                </div>
                : <div className={styles.counter}>
                    <button className={`${styles.button} ${styles.dec}`} onClick={decCounter}>-</button>
                    <div className={styles.value}>{value}</div>
                    <button className={`${styles.button} ${styles.inc}`} onClick={incCounter}>+</button>
                    <button onClick={()=> dispatch(removeCounterAC(id))}>remove</button>
                </div>
            }
        </div>
    );
};
