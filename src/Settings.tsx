import React from 'react';
import {ChangeEvent} from 'react';
import './App.css';

type PropsType = {
    maxValueTitle: string
    startValueTitle: string
    maxValue: number
    startValue: number
    changeMaxValue: (value: number) => void
    changeStartValue: (value: number) => void
}

export const Settings = (props: PropsType) => {

    const setMaxValue = (e: ChangeEvent<HTMLInputElement>) => props.changeMaxValue(e.currentTarget.valueAsNumber)
    const setMinValue = (e: ChangeEvent<HTMLInputElement>) => props.changeStartValue(+e.currentTarget.valueAsNumber)

    return (
        <div className="settings">
            <div className={"maxValue"}>
                <span> {props.maxValueTitle} </span>
                <input type="number" value={props.maxValue}
                       onChange={setMaxValue}
                />
            </div>
            <div className={"startValue"}>
                <span>{props.startValueTitle} </span>
                <input type="number" value={props.startValue}
                       onChange={setMinValue}
                />
            </div>
        </div>
    );
}
