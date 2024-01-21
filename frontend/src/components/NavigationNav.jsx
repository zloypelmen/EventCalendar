import React, {useContext} from 'react';
import {Nav} from "react-bootstrap";
import {ABOUT_ROUTE, CALENDAR_ROUTE, EVENTS_ROUTE, NEW_CHANGE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const NavigationNav = observer(() => {
    const {user} = useContext(Context)
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