import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {LoadingAC} from "./bll/loadingReducer";
import {rootReducerType} from "../h8/bll/store";
import image from './assets/Circle-Loading.svg'

export type IsLoadingType = {
    isLoading: boolean
}

function HW10() {
    const isLoading = useSelector<rootReducerType, boolean>(state => state.loading.isLoading)
    let dispatch = useDispatch()

    const setLoading = () => {
        dispatch(LoadingAC(true))
        setTimeout(() => dispatch(LoadingAC(false)), 2000)
    }

    console.log(isLoading)
    return (
        <div>
            <hr/>
            homeworks 10

            {isLoading
                ? (
                    <div><img src={image} alt="loader"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            <hr/>
        </div>
    )
}

export default HW10
