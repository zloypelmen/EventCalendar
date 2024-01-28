import React, {useContext, useEffect} from 'react';
import AdminNavBar from "../components/AdminNavBar";
import ActionModal from "../components/ActionModal";
import AccordionUsage from "../components/ChangeChangeLogs";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getAllActions} from "../http/ActionsApi";

const AdminActions = observer(() => {
    const {actions} = useContext(Context)

    useEffect(() => {
        getAllActions().then(data => {

            const sortedActions = data.sort((a, b) => a.day - b.day);
            console.log(sortedActions)
            actions.setActions(sortedActions);
        });
    }, []);

    const reversedActions = actions.actions.slice().reverse();

    return (
        <div>
            <AdminNavBar/>

            <ActionModal/>
            <AccordionUsage data={reversedActions}  type="actions"/>

        </div>
    );
});

export default AdminActions;