import React, { useContext, useState } from "react";
import GlobalContext from "../context/GlobalContext";
import "./EventModal.css"
import bookmarkBorder from "../assets/bookmark_border.svg"
import deleteS from "../assets/delete-svgrepo-com.svg"
import dragHandle from "../assets/drag-handle-svgrepo-com.svg"
import schedule from "../assets/schedule-svgrepo-com.svg"
import segment from "../assets/segment-svgrepo-com.svg"
import cancel2 from "../assets/cancel2-svgrepo-com.svg"
import check from "../assets/check.svg"
import * as CalendarApi from "../http/CalendarApi";
import {addEvent} from "../http/CalendarApi";

const labelsClasses = [
    "indigo",
    "gray",
    "green",
    "blue",
    "red",
    "purple",
];

export default function EventModal() {
    const {
        setShowEventModal,
        daySelected,
        dispatchCalEvent,
        selectedEvent,
    } = useContext(GlobalContext);

    const [title, setTitle] = useState(
        selectedEvent ? selectedEvent.title : ""
    );
    const [description, setDescription] = useState(
        selectedEvent ? selectedEvent.description : ""
    );
    const [selectedLabel, setSelectedLabel] = useState(
        selectedEvent
            ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
            : labelsClasses[0]
    );

    function handleSubmit(e) {
        e.preventDefault();
        const calendarEvent = {
            title,
            description,
            label: selectedLabel,
            day: daySelected.valueOf(),
            id: selectedEvent ? selectedEvent.id : Date.now(),
        };
        if (selectedEvent) {
            dispatchCalEvent({ type: "update", payload: calendarEvent });
            CalendarApi.deleteEvent(selectedEvent.id)
            CalendarApi.addEvent(calendarEvent.title, calendarEvent.description, calendarEvent.label, calendarEvent.day)
        } else {
            dispatchCalEvent({ type: "push", payload: calendarEvent });
            CalendarApi.addEvent(calendarEvent.title, calendarEvent.description, calendarEvent.label, calendarEvent.day)
        }
        window.location.reload()
        window.location.reload()
        setShowEventModal(false);
    }
    return (
        <div className="event_modal">
            <form className="form_event_modal">
                <header>
                    <button className={"arrow2"} >
                        <img src={dragHandle} alt={"drag_handle"} className="drag_handle"/>
                    </button>

                    <div>
                        {selectedEvent && (
                            <button className="arrow" onClick={() => {
                                dispatchCalEvent({
                                    type: "delete",
                                    payload: selectedEvent,
                                });
                                setShowEventModal(false);
                                CalendarApi.deleteEvent(selectedEvent.id);
                            }}>
                                <img src={deleteS} alt="delete"/>
                            </button>

                        )}

                        <button className={"arrow"} onClick={() => setShowEventModal(false)}>
                            <img src={cancel2} alt={"close"} className="material-icons-outlined text-gray-400"/>
                        </button>

                    </div>
                </header>
                <div className="p_3">
                    <div className="grid_class_name grid-cols-2 gap-y-7">
                        <div></div>
                        <input
                            type="text"
                            name="title"
                            placeholder="Add title"
                            value={title}
                            required
                            className="title_input"
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className={"arrow3"} >
                            <img src={schedule} alt={"drag_handle"} className="drag_handle mb-2"/>
                        </div>

                        <p>{daySelected.format("dddd, MMMM DD")}</p>
                        <div className={"arrow3"} >
                            <img src={segment} alt={"drag_handle"} className="drag_handle"/>
                        </div>
                        <input
                            type="text"
                            name="description"
                            placeholder="Add a description"
                            value={description}
                            required
                            className="description_input"
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <div className={"arrow3"} >
                            <img src={bookmarkBorder} alt={"drag_handle"} className="drag_handle mt-3"/>
                        </div>

                        <div className="label">
                            {labelsClasses.map((lblClass, i) => (
                                <span
                                    key={i}
                                    onClick={() => setSelectedLabel(lblClass)}
                                    className={`bg-${lblClass} selected_label`}
                                >
                                    {selectedLabel === lblClass && (
                                        <div className={"check "} >
                                            <img src={check} alt={"drag_handle"} className="drag_handle1"/>
                                        </div>
                                    )}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <footer className="footer_event_model">
                    <button
                        type="submit"
                        onClick={handleSubmit}

                    >
                        Save
                    </button>
                </footer>
            </form>
        </div>
    );
}
