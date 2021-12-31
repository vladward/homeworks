import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from "react-redux";
import {rootReducerType} from "../h8/bll/store";
import {ChangeThemeC, ColorThemeType} from "./bll/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<rootReducerType, ColorThemeType>(state => state.theme)
    let dispatch = useDispatch()
    const onChangeCallBack = (value: string) => {
        dispatch(ChangeThemeC(value))
    }
    console.log(theme.colorTheme + '-text')
    return (
        <div className={s[theme.colorTheme]}>
            <hr/>
            <span className={s[theme.colorTheme + '-text']}>
                homeworks 12
            </span>
            <SuperSelect options={themes}
                         value={theme.colorTheme}
                         onChangeOption={onChangeCallBack}
            />
            <hr/>
        </div>
    );
}

export default HW12;
