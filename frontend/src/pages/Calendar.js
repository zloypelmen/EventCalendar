import React, { useState, useContext, useEffect } from "react";

import { getMonth } from "../utils/util";
import CalendarHeader from "../components/CalendarHeader";
import SideBar from "../components/SideBar";
import Month from "../components/Month";
import GlobalContext from "../context/GlobalContext";
import EventModal from "../components/EventModal";
import "./Calendar.css"

const Calendar = () => {
    const [currenMonth, setCurrentMonth] = useState(getMonth());
    const { monthIndex, showEventModal } = useContext(GlobalContext);


    useEffect(() => {
        setCurrentMonth(getMonth(monthIndex));
    }, [monthIndex]);

    return (
        <React.Fragment>

            {showEventModal && <EventModal />}
            <div className="calendar_class">
                    <CalendarHeader />
                <div className="calendar_header1">
                    <SideBar />
                    <Month month={currenMonth} />
                </div>
            </div>
        </React.Fragment>
    );
};

export default Calendar;