import React from 'react';
import './App.css';
import {MESSAGES} from "./bll/reducer";

type PropsType = {
    counter: number
    minValue: number
    maxValue: number
    error: string
}

export const Counter = (props:PropsType) => {
    console.log(props.error)
    return (
        <div className="counter">
            {props.error === MESSAGES.SETTINGS_MESSAGE ?
                <h3 className={'default'}>{MESSAGES.SETTINGS_MESSAGE}</h3> :
                props.error === MESSAGES.ERROR_MESSAGE ?
                    <h3 className={'error'}>{MESSAGES.ERROR_MESSAGE}</h3> :
                    <h3 className={props.counter === props.maxValue ? 'maxNumber' : 'defaultNumber'}>{props.counter}</h3>}
        </div>
    );
}