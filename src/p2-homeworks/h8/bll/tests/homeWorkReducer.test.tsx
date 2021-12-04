import React from 'react'
import {homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: UserType[] // need to fix any

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ]
})

test('sort name up', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-UP'})


     expect(newState[0].name).toBe('Александр')
     expect(newState[1].name).toBe('Ирина')
     expect(newState.length).toBe(6)
    console.log(newState)
})
test('sort name down', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-DAWN'})

    expect(newState[0].name).toBe('Кот')
    expect(newState[1].name).toBe('Коля')
    expect(newState.length).toBe(6)
    console.log(newState)
})
test('check age 18', () => {
    const newState = homeWorkReducer(initialState, {type: 'SORT-AGE', payload: 18})

    expect(newState[0].name).toBe('Дмитрий')
    expect(newState[0].age).toBe(40)
    expect(newState[1].name).toBe('Виктор')
    expect(newState[1].age).toBe(44)
    expect(newState.length).toBe(4)
    console.log(newState)
})
