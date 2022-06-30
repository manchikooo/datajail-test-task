import {v1} from "uuid";

enum ACTIONS_TYPES {
    ADD_COUNTER = "ADD_COUNTER",
    CHANGE_COUNTER = "CHANGE_COUNTER",
}

export type CounterType = {
    id: string,
    value: number
}
type CountersInitialStateType = typeof countersInitialState
type ActionTypes = AddCounterACType | ChangeCounterACType

const countersInitialState = [] as Array<CounterType>

export const countersReducer = (state: CountersInitialStateType = countersInitialState, action: ActionTypes): CountersInitialStateType => {
    switch (action.type) {
        case ACTIONS_TYPES.ADD_COUNTER: {
            return [...state, {id: v1(), value: 0}]
        }
        case ACTIONS_TYPES.CHANGE_COUNTER: {
            return action.payload.parameter === 'inc'
                ? state.map(c => c.id === action.payload.id ? {...c, value: c.value + 1} : c)
                : state.map(c => c.id === action.payload.id ? {...c, value: c.value - 1} : c)
        }
        default:
            return state
    }
}
type AddCounterACType = ReturnType<typeof addCounterAC>
export const addCounterAC = () => {
    return {type: ACTIONS_TYPES.ADD_COUNTER} as const
}
type ChangeCounterACType = ReturnType<typeof changeCounterAC>
export const changeCounterAC = (id: string, parameter: 'inc' | 'dec') => {
    return {
        type: ACTIONS_TYPES.CHANGE_COUNTER,
        payload: {
            id, parameter
        } as const
    }
}
