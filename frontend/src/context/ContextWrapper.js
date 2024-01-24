import React, {useEffect, useMemo, useReducer, useState,} from "react";
import GlobalContext from "./GlobalContext";
import dayjs from "dayjs";
import * as CalendarApi from "../http/CalendarApi";

function savedEventsReducer(state, { type, payload }) {
    if (state === undefined) {
        state = [];
    }

    switch (type) {
        case "push":
            return [...state, payload];
        case "update":
            return state.map((evt) =>
                evt.id === payload.id ? payload : evt
            );
        case "delete":
            return state.filter((evt) => evt.id !== payload.id);
        default:
            throw new Error();
    }
}

function initEvents() {
    const storageEvents = localStorage.getItem("savedEvents");
    return storageEvents ? JSON.parse(storageEvents) : [];
}
// function initEvents() {
//     const storageEvents = localStorage.getItem("savedEvents");
//     const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
//     return parsedEvents;
// }

export default function ContextWrapper(props) {
    const [monthIndex, setMonthIndex] = useState(dayjs().month());
    const [smallCalendarMonth, setSmallCalendarMonth] = useState(null);
    const [daySelected, setDaySelected] = useState(dayjs());
    const [showEventModal, setShowEventModal] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);
    const [labels, setLabels] = useState([]);
    const [savedEvents, dispatchCalEvent] = useReducer(
        savedEventsReducer,
        [],
        initEvents
    );

    const filteredEvents = useMemo(() => {
        console.log(savedEvents)

        if (savedEvents && labels) {
            return savedEvents.filter((evt) =>
                labels
                    .filter((lbl) => lbl.checked)
                    .map((lbl) => lbl.label)
                    .includes(evt.label)
            );
        } else {
            return [];
        }
    }, [savedEvents, labels]);

    useEffect(() => {
        const storedUserId = localStorage.getItem('userId');

        CalendarApi.getAllCalendar()
            .then(data => {
                console.log(data)
                const filteredEvents = data.filter(event => event.userId == storedUserId);
                localStorage.setItem('savedEvents', JSON.stringify(filteredEvents));

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [savedEvents]);

    useEffect(() => {
        setLabels((prevLabels) => {
            if (savedEvents && prevLabels) {
                return [...new Set(savedEvents.map((evt) => evt.label))].map(
                    (label) => {
                        const currentLabel = prevLabels.find(
                            (lbl) => lbl.label === label
                        );
                        return {
                            label,
                            checked: currentLabel ? currentLabel.checked : true,
                        };
                    }
                );
            } else {
                return [];
            }
        });
    }, [savedEvents]);

    useEffect(() => {
        if (smallCalendarMonth !== null) {
            setMonthIndex(smallCalendarMonth);
        }
    }, [smallCalendarMonth]);

    useEffect(() => {
        if (!showEventModal) {
            setSelectedEvent(null);
        }
    }, [showEventModal]);

    function updateLabel(label) {
        setLabels(
            labels.map((lbl) => (lbl.label === label.label ? label : lbl))
        );
    }

    return (
        <GlobalContext.Provider
            value={{
                monthIndex,
                setMonthIndex,
                smallCalendarMonth,
                setSmallCalendarMonth,
                daySelected,
                setDaySelected,
                showEventModal,
                setShowEventModal,
                dispatchCalEvent,
                selectedEvent,
                setSelectedEvent,
                savedEvents,
                setLabels,
                labels,
                updateLabel,
                filteredEvents,
            }}
        >
            {props.children}
        </GlobalContext.Provider>
    );
}
