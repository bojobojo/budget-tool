import React, { useState, useContext } from "react";
import { Store, IValue } from '../Store';
import Calendar from "react-calendar";
import { getDateStr, extractYearAndMonth, tabLeft } from '../util';
import "./DatePicker.css";

const DatePicker = (): JSX.Element => {
    const [show, setShow] = useState(false);
    const { state, dispatch }: IValue = useContext(Store);
    const { date } = state;
    return (
        <div className="relative">
            <div className="calendar-selector flex justify-center items-center pa3">
                <i onClick={() => setShow(!show)} className="pa1 ma1 pa2-ns ma2-ns calendar-icon blue bb f4 f3-ns pointer dim fas fa-calendar-alt"></i>
                <strong className="pa1 ma1 pa2-ns ma2-ns f4 f3-ns  black-70">{`${date.getFullYear()} - ${tabLeft(date.getMonth()+1)}`}</strong>
            </div>
            {show &&
                <Calendar className={["absolute br2 calendar"]} value={date} onClickDay={value => { dispatch({ type: "CHANGE_DATE", payload: value }); setShow(!show) }} />}
        </div>
    );
}
export default DatePicker;