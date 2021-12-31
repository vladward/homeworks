import React, {ChangeEvent} from 'react'
import {Slider, Typography} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
    max: number
    min: number
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, max, min
    }
) => {
    const onChangeCallback = (e: ChangeEvent<{}>, newValue: number | number[]) => {
        if (value) {
            onChangeRange && onChangeRange(newValue as number[])
        }
    }

    function valuetext(value: number) {
        return `${value}`;
    }


    return (
        <>
            {value !== null && <div>
                <Slider
                    style={{width: '250px'}}
                    value={value}
                    min={min}
                    max={max}
                    step={1}
                    // scale={x => x ** 10}
                    onChange={onChangeCallback}
                    valueLabelDisplay="off"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
            </div>}
        </>
    )
}

export default SuperDoubleRange
