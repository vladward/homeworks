import React, {useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
    totalUsers: number
}

const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback, totalUsers}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (title: string) => {
        if (title.trim() !== '') {
            setName(title)
            setError('')
        } else {
            setName('')
            setError('Name is invalid')
        }

    }
    const addUserCallBack = () => {
        if (name.trim() !== '') {
            alert(`Hello ${name} !`)
            addUserCallback(name.trim())
            setName('')
            setError('')
        } else {
            setError('Name is invalid')
        }
    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUserCallBack={addUserCallBack}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
