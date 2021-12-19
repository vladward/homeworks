import {combineReducers, createStore} from "redux";
import {homeWorkReducer} from "./homeWorkReducer";
import {loadingReducer} from "../../h10/bll/loadingReducer";

let rootReducer = combineReducers({
    users: homeWorkReducer,
    loading: loadingReducer,
})

export type rootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)