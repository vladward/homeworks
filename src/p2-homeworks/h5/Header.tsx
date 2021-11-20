import React from 'react'
import { Link } from 'react-router-dom'
import {PATH} from "./MyRoutes"
import s from './../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {
    return (
        <div className={s.headerLinks}>
            <button><Link to={PATH.PRE_JUNIOR}>Pre-Junior</Link></button>
            <button><Link to={PATH.JUNIOR}>Junior</Link></button>
            <button><Link to={PATH.JUNIOR_PLUS}>Junior-Plus</Link></button>
        </div>
    )
}

export default Header
