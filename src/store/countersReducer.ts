import {v1} from "uuid";
import {log} from "util";

enum ACTIONS_TYPES {
    ADD_COUNTER = "ADD_COUNTER",
    CHANGE_COUNTER = "CHANGE_COUNTER",
    REMOVE_COUNTER = "REMOVE_COUNTER",
}

export type CounterType = {
    id: string,
    value: number,
    isFourth: boolean,
}
type CountersInitialStateType = typeof countersInitialState
type ActionTypes = AddCounterACType | ChangeCounterACType | RemoveCounterACType

const countersInitialState = [] as Array<CounterType>

export const countersReducer = (state: CountersInitialStateType = countersInitialState, action: ActionTypes): CountersInitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPES.ADD_COUNTER: {
            const accCountersValues = state.reduce((sum, counter) => {
                return sum + counter.value;
            }, 0);
            const isFourthCondition = state.length >= 3 && state.slice(-3).every(c => !c.isFourth)
            return [...state, {id: v1(), value: accCountersValues, isFourth: isFourthCondition}]
        }
        case ACTIONS_TYPES.CHANGE_COUNTER: {
            return action.payload.parameter === 'inc'
                ? state.map(c => c.id === action.payload.id ? {...c, value: c.value + 1} : c)
                : state.map(c => c.id === action.payload.id ? {...c, value: c.value - 1} : c)
        }
        case ACTIONS_TYPES.REMOVE_COUNTER: {
            return state.filter(c => c.id !== action.payload.id)
        }
        default:
            return state
    }
}
type AddCounterACType = ReturnType<typeof addCounterAC>
export const addCounterAC = () => {
    return {
        type: ACTIONS_TYPES.ADD_COUNTER
    } as const
}
type ChangeCounterACType = ReturnType<typeof changeCounterAC>
export const changeCounterAC = (id: string, parameter: 'inc' | 'dec') => {
    return {
        type: ACTIONS_TYPES.CHANGE_COUNTER,
        payload: {
            id, parameter
        }
    } as const
}
type RemoveCounterACType = ReturnType<typeof removeCounterAC>
export const removeCounterAC = (id: string) => {
    return {
        type: ACTIONS_TYPES.REMOVE_COUNTER,
        payload: {
            id
        }
    } as const
}
