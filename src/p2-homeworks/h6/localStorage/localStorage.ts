export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state)
    localStorage.setItem(key, stateAsString)
}

export function restoreState<T>(key: string, defaultState: T) {
    let state = defaultState
    const stateAsString = localStorage.getItem(key)
    if (stateAsString !== null) state = JSON.parse(stateAsString) as T
    return state
}

// ---------------------------------------------------------------------------------------------------------------
// пример использования:
type StateType = {
    x: string
    y: number
}

saveState<StateType>('test', {x: 'A', y: 1})

const state: StateType = restoreState<StateType>('test', {x: '', y: 0})
