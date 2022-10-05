import React, {useEffect} from 'react';
import './App.css';
import {Button} from './Button';
import {Settings} from "./Settings";
import {Counter} from "./Counter";
import {useDispatch, useSelector} from "react-redux";
import {
    BUTTONS_TITLES,
    changeMaxValueAC,
    changeStartValueAC,
    setCounterAC, setIncButtonAC, setSettingButtonAC
} from "./bll/reducer";
import {AppStoreType} from "./bll/store";

export const App = () => {
    let errorValue = useSelector<AppStoreType, string>(state => state.counterState.errorValue)
    let startValue = useSelector<AppStoreType, number>(state => state.counterState.startValue)
    let maxValue = useSelector<AppStoreType, number>(state => state.counterState.maxValue)
    let setButton = useSelector<AppStoreType, boolean>(state => state.counterState.setButton)
    let counter = useSelector<AppStoreType, number>(state => state.counterState.counter)
    let incButton = useSelector<AppStoreType, boolean>(state => state.counterState.incButton)
    let resetButton = useSelector<AppStoreType, boolean>(state => state.counterState.resetButton)

    const dispatch = useDispatch()

    // Using hook useEffect for getting data from local storage
    useEffect(() => {
        let min = localStorage.getItem('minValue')
        let max = localStorage.getItem('maxValue')
        if (min && max) {
            dispatch(changeStartValueAC(+min))
            dispatch(changeMaxValueAC(+max))
        }
    }, [])

    const changeMaxValue = (maxValue: number) => {
        dispatch(changeMaxValueAC(maxValue))
    }

    const changeStartValue = (startValue: number) => {
        dispatch(changeStartValueAC(startValue))
    }

    const onSetButtonClick = () => {
        dispatch(setSettingButtonAC('', true, startValue, false, false))
        // Setting data into local storage
        localStorage.setItem('minValue', startValue.toString())
        localStorage.setItem('maxValue', maxValue.toString())
    }

    const onIncButtonClick = () => {
        counter = counter + 1
        dispatch(setCounterAC(counter))
    }

    const onResetButtonClick = () => {
        dispatch(setCounterAC(startValue))
        dispatch(setIncButtonAC(false))
    }

    return (
        <div className="App">
            <div className="settingsBlock">
                <Settings maxValueTitle={BUTTONS_TITLES.MAX_VALUE_TITLE}
                          startValueTitle={BUTTONS_TITLES.START_VALUE_TITLE}
                          maxValue={maxValue}
                          startValue={startValue}
                          changeMaxValue={changeMaxValue}
                          changeStartValue={changeStartValue}
                />
                <div className="buttons">
                    <Button title={BUTTONS_TITLES.SET_TITLE}
                            disabled={setButton}
                            execFunc={onSetButtonClick}
                    />
                </div>
            </div>
            <div className="counterBlock">
                <Counter counter={counter}
                         maxValue={maxValue}
                         minValue={startValue}
                         error={errorValue}
                />
                <div className="buttons">
                    <Button title={BUTTONS_TITLES.INC_TITLE} disabled={incButton} execFunc={onIncButtonClick}/>
                    <Button title={BUTTONS_TITLES.RESET_TITLE} disabled={resetButton} execFunc={onResetButtonClick}/>
                </div>
            </div>
        </div>
    );
}