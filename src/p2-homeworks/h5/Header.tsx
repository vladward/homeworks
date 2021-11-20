import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {PATH} from "./MyRoutes"
import s from './../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {

    return (
        <div className={s.headerLinks}>
            <div className={s.headerLinks_container}>
                <Link className={s.button1} to={PATH.PRE_JUNIOR}>Pre-Junior</Link>
                <Link className={s.button2} to={PATH.JUNIOR}>Junior</Link>
                <Link className={s.button3} to={PATH.JUNIOR_PLUS}>Junior-Plus</Link>
                <div className={s.coub}></div>
            </div>
        </div>
    )
}

export default Header
