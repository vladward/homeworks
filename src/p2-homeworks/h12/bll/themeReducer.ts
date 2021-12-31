const initState: ColorThemeType = {
    colorTheme: ''
}

export type ColorThemeType = {
    colorTheme: string
}

export const themeReducer = (state = initState, action: ChangeThemeActionType): ColorThemeType => { // fix any
    switch (action.type) {
        case "CHANGE_THEME": {
            return {...state, colorTheme: action.name};
        }
        default: return state;
    }
};

type ChangeThemeActionType = ReturnType<typeof ChangeThemeC>

export const ChangeThemeC = (name: string) => {return {type: 'CHANGE_THEME', name} as const}