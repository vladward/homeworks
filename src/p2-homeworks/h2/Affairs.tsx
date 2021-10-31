import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import s from './Affairs.module.css'

type AffairsPropsType = {
    data: AffairType[]
    changeFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: string) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id}
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => props.changeFilter('all') // need to fix
    const setHigh = () => props.changeFilter('high')
    const setMiddle = () => props.changeFilter('middle')
    const setLow = () => props.changeFilter('low')

    return (
        <div>
            {mappedAffairs}
            <div className={s.someClass}>


                <button onClick={setAll}>All</button>
                <button onClick={setHigh}>High</button>
                <button onClick={setMiddle}>Middle</button>
                <button onClick={setLow}>Low</button>
            </div>
        </div>
    )
}

export default Affairs
