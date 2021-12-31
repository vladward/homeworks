import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {Typography} from "@material-ui/core";

function HW11() {
    // const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState<number[]>([0, 100])
    return (
        <div>
            <hr/>
            homeworks 11

            <div>
                <p>{value2[0]}</p>
                <SuperRange
                    onChangeRange={(newValue) => setValue2(newValue)}
                    value={[value2[0]]}
                />
            </div>

            <div>
                <p>{value2[0]}</p>
                <SuperDoubleRange
                    onChangeRange={(newValue) => setValue2(newValue)}
                    value={value2}
                />
                <p>{value2[1]}</p>
            </div>

            <hr/>
            <hr/>
        </div>
    )
}

export default HW11
