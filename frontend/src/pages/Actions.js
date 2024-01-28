import React, {useContext, useEffect} from 'react';
import {getAllActions} from "../http/ActionsApi";

import * as CalendarApi from "../http/CalendarApi";
import {Context} from "../index";
import ActionCards from "../components/ActionCards";
import {observer} from "mobx-react-lite";

const Actions = observer(() => {
    const {actions} = useContext(Context)

    useEffect(() => {
        getAllActions().then(data => {

            const sortedActions = data.sort((a, b) => a.day - b.day);
            console.log(sortedActions)
            actions.setActions(sortedActions);
        });
    }, []);

    function handleSubmit(action) {
        CalendarApi.addEvent(action.title, action.description, action.label, action.day)
    }

    return (
        <div>
            <ActionCards/>
        </div>
    );
});

export default Actions;