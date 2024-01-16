import dayjs from "dayjs";
import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../utils/util";
import "./SmallCalendar.css"
import leftL from "../assets/arrow-left-1-svgrepo-com.svg";
import rightL from "../assets/arrow-right-1-svgrepo-com.svg";

export default function SmallCalendar() {
    const [currentMonthIdx, setCurrentMonthIdx] = useState(
        dayjs().month()
    );
    const [currentMonth, setCurrentMonth] = useState(getMonth());
    useEffect(() => {
        setCurrentMonth(getMonth(currentMonthIdx));
    }, [currentMonthIdx]);

    const {
        monthIndex,
        setSmallCalendarMonth,
        setDaySelected,
        daySelected,
    } = useContext(GlobalContext);

    useEffect(() => {
        setCurrentMonthIdx(monthIndex);
    }, [monthIndex]);

    function handlePrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1);
    }
    function handleNextMonth() {
        setCurrentMonthIdx(currentMonthIdx + 1);
    }
    function getDayClass(day) {
        const format = "DD-MM-YY";
        const nowDay = dayjs().format(format);
        const currDay = day.format(format);
        const slcDay = daySelected && daySelected.format(format);
        if (nowDay === currDay) {
            return "text1";
        } else if (currDay === slcDay) {
            return "text2";
        } else {
            return "";
        }
    }
    return (
        <div className="small_calendar">
            <header className="header_small_calendar">
                <p className="p_small_calendar">
                    {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
                        "MMMM YYYY"
                    )}
                </p>
                <div>
                    <button className = "arrow10" onClick={handlePrevMonth}>
                        <img  src={leftL} alt="calendar"/>
                    </button>
                    <button className = "arrow10" onClick={handleNextMonth}>
                        <img  src={rightL} alt="calendar" />
                    </button>
                </div>
            </header>
            <div className="mini_small_calendar">
                {currentMonth[0].map((day, i) => (
                    <span key={i}>
            {day.format("dd").charAt(0)}
          </span >
                ))}
                {currentMonth.map((row, i) => (
                    <React.Fragment key={i}>
                        {row.map((day, idx) => (
                            <button
                                key={idx}
                                onClick={() => {
                                    setSmallCalendarMonth(currentMonthIdx);
                                    setDaySelected(day);
                                }}
                                className={`wert ${getDayClass(day)}`}
                            >
                                <span className="text-sm">{day.format("D")}</span>
                            </button>
                        ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
