import {combineReducers, createStore} from "redux";
import {homeWorkReducer} from "./homeWorkReducer";
import {loadingReducer} from "../../h10/bll/loadingReducer";
import {themeReducer} from "../../h12/bll/themeReducer";

let rootReducer = combineReducers({
    users: homeWorkReducer,
    loading: loadingReducer,
    theme: themeReducer
})

export type rootReducerType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)