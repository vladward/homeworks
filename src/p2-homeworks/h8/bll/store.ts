import {combineReducers, createStore} from "redux";
import {homeWorkReducer} from "./homeWorkReducer";

let rootReducer = combineReducers({
    users: homeWorkReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>
export let store = createStore(rootReducer)