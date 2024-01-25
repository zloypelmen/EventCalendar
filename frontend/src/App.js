import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar"
import React, {useContext, useEffect, useState} from "react";
import {Context} from "./index";
import ContextWrapper from "./context/ContextWrapper";
import PopupCard from "./components/PopupCard";


function App() {

    const { user } = useContext(Context);
    const [closestEvent, setClosestEvent] = useState();

    useEffect(() => {
        const checkLocalStorage = () => {
            const storedEvent = JSON.parse(localStorage.getItem('closestEvent'));

            setClosestEvent(storedEvent);
        };

        checkLocalStorage();

        const intervalId = setInterval(checkLocalStorage, 60000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {

        console.log("user.isAuth changed:", user.isAuth);
    }, [user.isAuth]);

    useEffect(() => {

        console.log("user.isAdmin changed:", user.isAdmin);
    }, [user.isAdmin]);

    return (

        <ContextWrapper>
            {closestEvent && <PopupCard event={closestEvent} />}
            <BrowserRouter>
                <NavBar />
                <AppRouter />
            </BrowserRouter>
        </ContextWrapper>
  );
}

export default App;
