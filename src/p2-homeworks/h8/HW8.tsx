import React, {useState} from 'react'
import {homeWorkReducer, SortAgeAC, SortDawnAC, SortUpAC} from './bll/homeWorkReducer'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import s from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "./bll/store";

export type UserType = {
    _id: number
    name: string
    age: number
}

function HW8() {

    let users = useSelector<rootReducerType, Array<UserType>>(state => state.users);

    let dispatch = useDispatch()
    // need to fix any
    const finalPeople = users.map((p, i) => (
        <div className={s.main} key={i}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => dispatch({type: 'SORT-UP'})
    const sortDawn = () => dispatch({type: 'SORT-DAWN'})
    const sortAge = (payload: number) => dispatch({type: 'SORT-AGE', payload})

    return (
        <div>
            homeworks 8
            <hr/>
            <div className={s.wrapper}>

                {/*should work (должно работать)*/}
                {finalPeople}

                <div className={s.buttons}>
                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton onClick={sortDawn}>sort dawn</SuperButton></div>
                    <div><SuperButton onClick={() => sortAge(18)}>sort age</SuperButton></div>
                </div>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    )
}

export default HW8
