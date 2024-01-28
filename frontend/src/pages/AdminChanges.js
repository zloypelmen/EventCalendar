import React, {useContext, useEffect} from 'react';
import AdminNavBar from "../components/AdminNavBar";
import ChangeModal from "../components/ChangeModal";
import AccordionUsage from "../components/ChangeChangeLogs";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {getAllChanges} from "../http/ChangesApi";

const AdminChanges = observer(() => {
    const {changes} = useContext(Context)

    useEffect(() => {
        getAllChanges().then(data => changes.setChanges(data))
    }, []);

    const reversedChanges = changes.changes.slice().reverse();

    return (
        <div>
            <AdminNavBar/>

            <ChangeModal/>
            <AccordionUsage data={reversedChanges}  type="changes"/>
        </div>
    );
});

export default AdminChanges;