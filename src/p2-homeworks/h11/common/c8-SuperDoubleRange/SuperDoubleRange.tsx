import React, {ChangeEvent} from 'react'
import {Slider, Typography} from "@material-ui/core";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value, ...restProps
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
                <Typography id="range-slider" gutterBottom>
                     range
                </Typography>
                <Slider
                    style={{width: '250px'}}
                    value={value}
                    min={0}
                    max={100}
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
