import React from 'react'
import { Navigate, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Error404 from './pages/Error404'
import { Junior } from './pages/Junior'
import { JuniorPlus } from './pages/JuniorPlus'
import PreJunior from './pages/PreJunior'

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/junior-plus'
    // add paths
}

function MyRoutes() {
    return (
        <Routes>
            {/*Switch выбирает первый подходящий роут*/}

            {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
            {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
            <Route path={'/'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
            <Route path={PATH.JUNIOR} element={ <Junior/>}/>
            <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>
                {/*// add routes*/}
            {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
            <Route element={<Error404/>}/>
        </Routes>
    )
}

export default MyRoutes
