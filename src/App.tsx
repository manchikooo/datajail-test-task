import React from 'react';
import {useAppSelector} from "./store/store";
import {useDispatch} from "react-redux";
import {addCounterAC} from "./store/countersReducer";
import {Counter} from "./components/Counter/Counter";
import {Button} from "./components/Button/Button";
import styles from './App.module.scss'

function App() {
    const dispatch = useDispatch()
    const counters = useAppSelector(state => state.counters)
    const addCounter = () => {
        dispatch(addCounterAC())
    }

    return (
        <div className={styles.app}>
            <Button title={'Add Counter'} onClickHandler={addCounter}/>
            <div className={styles.countersContainer}>
                {counters.map((c, i) => {
                        return (<Counter
                            key={c.id}
                            id={c.id}
                            value={c.value}
                            isFourth={c.isFourth}/>)
                    }
                )}
            </div>
        </div>
    );
}

export default App;
