import React from 'react'
import s from './../../../p1-main/m1-ui/u1-app/App.module.css'
import {Link} from "react-router-dom";
import {PATH} from "../MyRoutes";

function Error404() {

    return (
        <div className={s.error}>
            <div className={s.error_text}/>
            <div className={s.error_text2}><h1>404</h1>
                <h3>Page not found!</h3>
                <Link to={PATH.PRE_JUNIOR}>Go Home</Link>
            </div>
        </div>
    )
}

export default Error404
