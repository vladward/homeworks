import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (title: string) => void
    addUserCallBack: () => void
    error: string
    totalUsers: number
}

const Greeting = (props: GreetingPropsType) => {
    const inputClass = props.error.length ? s.error : ''

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setNameCallback(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            sendWithEnter()
        }
    }

    const sendWithEnter = () => {
        props.addUserCallBack()
    }

    return (
        <div>
            <input type="input"
                   value={props.name}
                   onChange={onChangeHandler}
                   className={inputClass}
                   onKeyPress={onKeyPressHandler}
            />
            <button disabled={!!props.error.length} onClick={sendWithEnter}>add</button>
            <span>{props.totalUsers}</span>
            <div>
                <span className={inputClass}>{props.error}</span>
            </div>

        </div>
    )
}

export default Greeting
