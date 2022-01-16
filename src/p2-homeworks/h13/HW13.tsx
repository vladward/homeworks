import React, {ChangeEvent, useState} from 'react'
import {API} from "./RequestsAPI";
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";

export const HW13 = () => {
    const [value, setValue] = useState<boolean>(false)
    const onClick = (e: ChangeEvent<HTMLInputElement>) => {
        let val = e.currentTarget.checked
        setValue(val)
        API.checkBoxRequest({success: value})
            .then(res => {
                setValue(val)
                alert(res.data.errorText)
                alert(res.data.info)
            })
            .catch(error => {
                    alert(error.response.data.errorText)
                    alert(error.message)
                    alert(error.response.data.info)

                }
            );
    }

    return (
        <div>
            <SuperCheckbox checked={value} onChange={onClick}/>
        </div>
    )
}