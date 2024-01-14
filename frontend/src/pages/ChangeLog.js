import React, {useContext, useEffect} from 'react';
import CardChange from "../components/CardChange";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {getAllChanges} from "../http/ChangesApi";

const ChangeLog = observer(() => {
    const {changes} = useContext(Context)

    useEffect(() => {
        getAllChanges().then(data => changes.setChanges(data))
    }, []);

    return (
            <CardChange/>
    );
});

export default ChangeLog;