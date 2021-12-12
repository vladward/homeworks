import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import moment from "moment";
import s from "../../p1-main/m1-ui/u1-app/App.module.css"


function Clock() {
    const stringTime = moment().format('HH:mm:ss') // fix with date
    const stringDate = moment().format('DD.MM.YYYY') // fix with date

    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState('1')
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId)
    }
    const start = () => {
        //stop()
        const id: number = window.setInterval(() => {
            setDate(stringTime)
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    return (
        <div>
            <div className={s.container}>
                <div className={s.container_time}>
                    <div className={s.button_box}>
                        <SuperButton onClick={start}>start</SuperButton>
                    </div>
                    <div
                        onMouseEnter={onMouseEnter}
                        onMouseLeave={onMouseLeave}
                        className={s.container_date}
                    >
                        <label className={s.label}>{stringTime}</label>
                        {show && (
                            <label>{stringDate}</label>
                        )}
                    </div>
                    <div className={s.button_box}>
                        <SuperButton className={s.button_box_button} onClick={stop}>stop</SuperButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Clock
