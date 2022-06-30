import React from 'react';
import './App.css';
import {useAppSelector} from "./store/store";
import {useDispatch} from "react-redux";
import {addCounterAC} from "./store/countersReducer";
import {CounterWithButtons} from "./components/CounterWithButtons/CounterWithButtons";

function App() {
    const dispatch = useDispatch()
    const counters = useAppSelector(state => state.counters)
    const addCounter = () => {
        dispatch(addCounterAC())
    }

    return (
        <div className="App">
            <button onClick={addCounter}>add counter</button>
            {counters.map((c, i) => {
                    return (<CounterWithButtons
                        key={c.id}
                        id={c.id}
                        value={c.value}
                        index={i + 1}/>)
                }
            )}
        </div>
    );
}

export default App;
