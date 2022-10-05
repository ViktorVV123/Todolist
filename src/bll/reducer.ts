export enum ACTIONS_TYPE {
    CHANGE_MAX_VALUE = 'Counter/CHANGE_MAX_VALUE',
    CHANGE_START_VALUE = 'Counter/CHANGE_MIN_VALUE',
    SET_COUNTER = 'Counter/SET_COUNTER',
    SET_INC_BUTTON = 'Counter/SET_INC_BUTTON',
    SET_BUTTON = 'Counter/SET_BUTTON'
}

export enum BUTTONS_TITLES {
    MAX_VALUE_TITLE = 'max-value',
    START_VALUE_TITLE = 'start-value',
    SET_TITLE = 'set',
    INC_TITLE = 'inc',
    RESET_TITLE = 'reset'
}

export enum MESSAGES {
    SETTINGS_MESSAGE = 'Enter values and press SET',
    ERROR_MESSAGE = 'Incorrect Value!'
}

const initialState = {
    errorValue: '',
    maxValue: 5,
    startValue: 0,
    setButton: true,
    counter: 0,
    incButton: true,
    resetButton: true
}

export type StateType = typeof initialState

const reducer = (state = initialState, action: ActionsType): StateType => {
    switch (action.type) {
        case ACTIONS_TYPE.CHANGE_MAX_VALUE: {
            return  action.maxValue <= state.startValue ?
                {
                    ...state,
                    errorValue: MESSAGES.ERROR_MESSAGE,
                    setButton: false,
                    maxValue: action.maxValue
                } :
                {
                    ...state,
                    errorValue: MESSAGES.SETTINGS_MESSAGE,
                    setButton: false,
                    maxValue: action.maxValue
                }
        }
        case ACTIONS_TYPE.CHANGE_START_VALUE: {
           return action.startValue < 0 || action.startValue >= state.maxValue ?
           {
                    ...state,
                    errorValue: MESSAGES.ERROR_MESSAGE,
                    setButton: false,
                    startValue: action.startValue
                } :
               {
                    ...state,
                    errorValue: MESSAGES.SETTINGS_MESSAGE,
                    setButton: false,
                    startValue: action.startValue
                }
        }

        case ACTIONS_TYPE.SET_BUTTON: {
            return {
                ...state,
                errorValue: action.errorValue,
                setButton: action.setButton,
                counter: action.startValue,
                incButton: action.incButton,
                resetButton: action.resetButton
            }
        }

        case ACTIONS_TYPE.SET_COUNTER: {
            return state.maxValue < action.value ?
                {
                    ...state,
                    incButton: true
                }:
                {
                ...state,
                counter: action.value,
            }
        }

        case ACTIONS_TYPE.SET_INC_BUTTON: {
            return {
                ...state,
                incButton: false
            }
        }

        default:
            return state
    }
}
export default reducer

type ActionsType =
    ReturnType<typeof changeMaxValueAC> |
    ReturnType<typeof changeStartValueAC> |
    ReturnType<typeof setCounterAC> |
    ReturnType<typeof setSettingButtonAC> |
    ReturnType<typeof setIncButtonAC>


export const changeMaxValueAC = (maxValue: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_MAX_VALUE,
        maxValue
    } as const
}
export const changeStartValueAC = (startValue: number) => {
    return {
        type: ACTIONS_TYPE.CHANGE_START_VALUE,
        startValue
    } as const
}

export const setCounterAC = (value: number) => {
    return {
        type: ACTIONS_TYPE.SET_COUNTER,
        value
    } as const
}
export const setIncButtonAC = (value: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_INC_BUTTON,
        value
    } as const
}

export const setSettingButtonAC = (errorValue: string, setButton: boolean, startValue: number, incButton: boolean, resetButton: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_BUTTON,
        errorValue,
        setButton,
        startValue,
        incButton,
        resetButton
    } as const
}


