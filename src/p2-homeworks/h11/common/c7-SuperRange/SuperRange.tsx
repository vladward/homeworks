import React, {ChangeEvent} from 'react'
import {Slider} from "@material-ui/core";

type SuperRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: number[]
};

const SuperRange: React.FC<SuperRangePropsType> = (
    {
        onChangeRange, value,
    }
) => {
    const onChangeCallback = (e: ChangeEvent<{}>, newValue: number | number[]) => {
        if (value) {
            onChangeRange && onChangeRange(newValue as number[])
        }
    }

    return (
        <>
            <div>
                {value && <Slider
                    style={{width: '250px'}}
                    value={value}

                    onChange={onChangeCallback}
                    valueLabelDisplay="off"
                    aria-labelledby="range-slider"
                />}
            </div>
        </>
    )
}

export default SuperRange
