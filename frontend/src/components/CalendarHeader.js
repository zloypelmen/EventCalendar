import dayjs from "dayjs";
import React, {useContext, useEffect, useState} from "react";
import GlobalContext from "../context/GlobalContext";
import leftL from "../assets/arrow-left-1-svgrepo-com.svg"
import rightL from "../assets/arrow-right-1-svgrepo-com.svg"
import "./CalendarHeader.css"
import MessageCard from "./MessageCard";

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

    function findNextEvent() {
        const events = JSON.parse(localStorage.getItem("savedEvents"));

        const currentTimestamp = new Date().getTime();

        let closestEvent = null;
        let minTimeDifference =   Number.POSITIVE_INFINITY;

        for (const event of events) {
            const timeDifference = event.day - currentTimestamp;

            if (timeDifference > 0 && timeDifference < minTimeDifference) {
                minTimeDifference = timeDifference;
                closestEvent = event;
            }
        }
        return closestEvent;
    }

    function findNextEventTitle(){
        const event = findNextEvent()
        return event.title
    }

    function findNextEventDay(){
        const event = findNextEvent()
        return event.day
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

            <div className={"closest-event"}>
                <h2 className="h2_span_button_calendar_header">Ближайшее событие</h2><MessageCard title={findNextEventTitle()}
                                                                                                  day={findNextEventDay()}/>
            </div>

        </header>
    );
}
