import dayjs from "dayjs";
import React, { useContext } from "react";
import GlobalContext from "../context/GlobalContext";
import leftL from "../assets/arrow-left-1-svgrepo-com.svg"
import rightL from "../assets/arrow-right-1-svgrepo-com.svg"
import "./CalendarHeader.css"

export default function CalendarHeader() {
    const { monthIndex, setMonthIndex } = useContext(GlobalContext);
    function handlePrevMonth() {
        setMonthIndex(monthIndex - 1);
    }
    function handleNextMonth() {
        setMonthIndex(monthIndex + 1);
    }

    function handleReset() {
        setMonthIndex(
            monthIndex === dayjs().month()
                ? monthIndex + Math.random()
                : dayjs().month()
        );
    }
    return (
        <header className="calendar_header">
            <button
                onClick={handleReset}
                className="button_calendar_header"
            >
                Сегодня
            </button>
            <button className = "arrow10" onClick={handlePrevMonth}>
                <img  src={leftL} alt="calendar"/>
            </button>
            <button className = "arrow10" onClick={handleNextMonth}>
                <img  src={rightL} alt="calendar" />
            </button>
            <h2 className="h2_span_button_calendar_header">
                {dayjs(new Date(dayjs().year(), monthIndex)).format(
                    "MMMM YYYY"
                )}
            </h2>
        </header>
    );
}
