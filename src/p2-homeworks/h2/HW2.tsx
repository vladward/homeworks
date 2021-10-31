import React, {useState} from 'react'
import Affairs from './Affairs'
import {v1} from 'uuid';

// types
export type AffairPriorityType = 'low' | 'middle' | 'high' // need to fix any
export type AffairType = {
    _id: string
    name: string
    priority: AffairPriorityType
} // need to fix any
export type FilterType = 'all' | AffairPriorityType

// constants
const defaultAffairs: Array<AffairType> = [ // need to fix any
    {_id: v1(), name: 'React', priority: 'high'},
    {_id: v1(), name: 'anime', priority: 'low'},
    {_id: v1(), name: 'games', priority: 'low'},
    {_id: v1(), name: 'work', priority: 'high'},
    {_id: v1(), name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: Array<AffairType>, filter: FilterType): any => { // need to fix any
    if (filter === 'high') {
        return affairs.filter( a => a.priority === 'high' )
    } else if (filter === 'low') {
        return affairs.filter( a => a.priority === 'low' )
    } else if (filter === 'middle') {
        return affairs.filter( a => a.priority === 'middle' )
    } else {
        return affairs
    }
}
export const deleteAffair = (affairs: Array<AffairType>, _id: string): any => { // need to fix any
    return affairs.filter( a => a._id !== _id )
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairType[]>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: any) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    const changeFilter = (filter: FilterType ) => {
        setFilter(filter)
    }

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                changeFilter={changeFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
