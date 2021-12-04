import {UserType} from "../HW8";

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

export const homeWorkReducer = (state = initialPeople, action: SortReducerActionTypes): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            // need to fix
            let copy = [...state]
            return copy.sort((a, b) => b.age - a.age)
        }
        case 'SORT-DAWN': {
            // need to fix
            let copy = [...state]
            return copy.sort((a, b) => b.age - a.age).reverse()
        }
        case 'SORT-AGE': {
            // need to fix
            return state.filter(c => c.age > action.payload).sort((a, b) => a.age - b.age)
        }
        default:
            return state
    }
}
type SortReducerActionTypes = sortUpType | sortDawnType | sortAgeType
type sortUpType = ReturnType<typeof SortUpAC>
export const SortUpAC = () => {return {type: 'SORT-UP'} as const}
type sortDawnType = ReturnType<typeof SortDawnAC>
export const SortDawnAC = () => {return {type: 'SORT-DAWN'} as const}
type sortAgeType = ReturnType<typeof SortAgeAC>
export const SortAgeAC = (payload: number) => {return {type: 'SORT-AGE', payload} as const}