import React from 'react'
import {AffairType} from "./HW2"
import s from './Affair.module.css'

type AffairPropsType = {
    affair: AffairType
    deleteAffairCallback: (_id: string) => void
}

function Affair(props: AffairPropsType) {
    let priority = props.affair.priority
    let clsName = s[priority]
    /* or let clsName = s[props.affair.priority] */

    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }

    return (
        <div className={s.affair}>
            <label className={clsName}>{props.affair.name}</label>
            <label className={clsName}>{props.affair.priority}</label>

            <button onClick={deleteCallback}>X</button>
        </div>
    )
}

export default Affair
