import React from 'react';
import {useDispatch} from "react-redux";
import {changeCounterAC} from "../../store/countersReducer";

type CounterPropsType = {
    id: string,
    value: number,
    index: number
}

export const CounterWithButtons = ({id, value, index}: CounterPropsType) => {
    const dispatch = useDispatch()

    const isFourthCounter = index % 4 === 0

    const incCounter = () => {
        dispatch(changeCounterAC(id, 'inc'))
    }

    const decCounter = () => {
        dispatch(changeCounterAC(id, 'dec'))
    }

    return (
        <div>
            {isFourthCounter
                ? value
                : <>
                    <button onClick={decCounter}>-</button>
                    {value}
                    <button onClick={incCounter}>+</button>
                </>
            }
        </div>
    );
};
