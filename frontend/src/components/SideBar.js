import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";
import Labels from "./Labels";
import "./SideBar.css"
export default function SideBar() {
    return (
        <aside className="side_bar">
            <CreateEventButton />
            <SmallCalendar />
            <Labels />
        </aside>
    );
}
