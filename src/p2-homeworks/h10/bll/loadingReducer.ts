import {IsLoadingType} from "../HW10";

const initialState: IsLoadingType = {
    isLoading: false
}

export const loadingReducer = (state = initialState, action: LoadingACType): IsLoadingType => {
    switch (action.type) {
        case 'SET_LOADING': {
            return {...state, isLoading: action.isLoading}
        }
        default: return state
    }
}

export const LoadingAC = (isLoading: boolean) => {return {type: "SET_LOADING", isLoading} as const}
export type LoadingACType = ReturnType<typeof LoadingAC>