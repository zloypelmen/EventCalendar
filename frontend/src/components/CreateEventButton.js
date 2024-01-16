import React, { useContext } from "react";
import plusImg from "../assets/plus.svg";
import GlobalContext from '../context/GlobalContext';
import "./CreateEventButton.css"

export default function CreateEventButton() {
    const { setShowEventModal } = useContext(GlobalContext);
    return (
        <button
            onClick={() => setShowEventModal(true)}
            className="button_create_event_button"
        >
            <img src={plusImg} alt="create_event" className="create_event"/>
            <span className="span_create_event_button">Создать</span>
        </button>
    );
}
