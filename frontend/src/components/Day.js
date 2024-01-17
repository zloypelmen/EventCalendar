import dayjs from "dayjs";
import React, { useContext, useState, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import "./Day.css"

export default function Day({ day, rowIdx }) {
    const [dayEvents, setDayEvents] = useState([]);
    const {
        setDaySelected,
        setShowEventModal,
        filteredEvents,
        setSelectedEvent,
    } = useContext(GlobalContext);

    useEffect(() => {
        const events = filteredEvents.filter(
            (evt) =>
                dayjs(Number(evt.day)).format("DD-MM-YY") === day.format("DD-MM-YY")
        );
        setDayEvents(events);
    }, [filteredEvents, day]);

    function getCurrentDayClass() {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
            ? "get_current_day"
            : "";
    }
    return (
        <div className="day">
            <header>
                {rowIdx === 0 && (
                    <p className="row_p">
                        {day.format("ddd").toUpperCase()}
                    </p>
                )}
                <p
                    className={`s_row_p  ${getCurrentDayClass()}`}
                >
                    {day.format("DD")}
                </p>
            </header>
            <div
                className="street"
                style={{ maxHeight: "200px"}}
                onMouseEnter={(e) => {
                    e.currentTarget.style.overflowY = "auto";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.overflowY = "hidden";
                }}
                onClick={() => {
                    setDaySelected(day);
                    setShowEventModal(true);
                }}
            >
                {dayEvents.map((evt, idx) => (
                    <div
                        key={idx}
                        onClick={() => setSelectedEvent(evt)}
                        className={`bg-${evt.label} day_event`}
                    >
                        {evt.title}
                    </div>
                ))}
            </div>
        </div>
    );
}
