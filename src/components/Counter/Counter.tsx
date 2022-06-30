import React, {useEffect} from 'react';
import {useDispatch} from "react-redux";
import {changeCounterAC} from "../../store/countersReducer";

type CounterPropsType = {
    id: string,
    value: number,
    index: number
}

export const Counter = ({id, value, index}: CounterPropsType) => {
    const dispatch = useDispatch()

    const isFourthCounter = index % 4 === 0

    const incCounter = () => {
        dispatch(changeCounterAC(id, 'inc'))
    }

    const decCounter = () => {
        dispatch(changeCounterAC(id, 'dec'))
    }

    useEffect(() => {
        let intervalId: string | number | NodeJS.Timeout | undefined
        if (isFourthCounter) {
            intervalId = setInterval(() => {
                dispatch(changeCounterAC(id, 'inc'))
            }, 1000)
        }
        return () => clearInterval(intervalId)
    }, [])

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
