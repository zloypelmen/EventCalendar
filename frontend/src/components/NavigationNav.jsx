import React from 'react';
import {Nav} from "react-bootstrap";
import {ABOUT_ROUTE, CALENDAR_ROUTE, ACTIONS_ROUTE, NEW_CHANGE_ROUTE, UPCOMING_EVENTS_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate} from "react-router-dom";

const NavigationNav = observer(() => {
    const navigate = useNavigate()

    return (

        (localStorage.getItem("isAuth") == 1 ?
                <Nav className="me-auto" >
                    <Nav.Link className="button-text" onClick={() => navigate(ABOUT_ROUTE)} >
                        Главная
                    </Nav.Link>
                    <Nav.Link className="button-text" onClick={() => navigate(NEW_CHANGE_ROUTE)}>
                        Последние изменения
                    </Nav.Link>
                    <Nav.Link className="button-text" onClick={() => navigate(CALENDAR_ROUTE)}>
                        Календарь
                    </Nav.Link>
                    <Nav.Link className="button-text" onClick={() => navigate(ACTIONS_ROUTE)}>
                        Мероприятия
                    </Nav.Link>
                    <Nav.Link className="button-text" onClick={() => navigate(UPCOMING_EVENTS_ROUTE)}>
                        Предстоящие события
                    </Nav.Link>

                </Nav>
                :
                <Nav className="me-auto" >
                    <Nav.Link className="button-text" onClick={() => navigate(ABOUT_ROUTE)} >
                        Главная
                    </Nav.Link>
                </Nav>


        )
    );
});

export default NavigationNav;