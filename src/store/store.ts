import {combineReducers, createStore} from "redux";
import {countersReducer} from "./countersReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
    counters: countersReducer
});

export const store = createStore(rootReducer);

export type AppStateType = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector

// @ts-ignore
window.store = store;