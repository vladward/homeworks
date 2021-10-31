import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';

export type UserType = {
    _id: string
    name: string
}

function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        let user = {_id: v1(), name: name}
        let newUser = [...users, user]

        setUsers(newUser)
    }
    let totalUsers = users.length
    console.log(users)

    return (
        <div>
            <hr/>
            homeworks 3

            <GreetingContainer users={users} addUserCallback={addUserCallback} totalUsers={totalUsers}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
