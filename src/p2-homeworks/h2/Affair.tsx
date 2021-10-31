import React from 'react'
import {AffairType} from "./HW2"
import s from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: string) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    let clsName = ''
    if (props.affair.priority === 'middle') {
        clsName = s.middle
    } else if(props.affair.priority === 'high') {
        clsName = s.high
    } else {
        clsName = s.low
    }
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={s.affair}>
            <label className={clsName}>{props.affair.name}</label>
            <label className={clsName}>{props.affair.priority}</label>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
