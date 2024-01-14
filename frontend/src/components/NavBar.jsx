import logo from "../assets/calendar.svg"
import "./NavBar.css"
import {Nav} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useContext} from "react";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, CALENDAR_ROUTE, EVENTS_ROUTE, LOGIN_ROUTE, NEW_CHANGE_ROUTE} from "../utils/consts";

const NavBar = () => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(LOGIN_ROUTE)
    }

    return (
        <header>
            <img src={logo} alt="calendar" />
            <h1>
                EventCalendar
            </h1>

            <Nav className="me-auto" >
                <Nav.Link onClick={() => navigate(ABOUT_ROUTE)} >
                    Главная
                </Nav.Link>
                <Nav.Link onClick={() => navigate(NEW_CHANGE_ROUTE)}>
                    Последние изменения
                </Nav.Link>
                <Nav.Link onClick={() => navigate(CALENDAR_ROUTE)}>
                    Календарь
                </Nav.Link>
                <Nav.Link onClick={() => navigate(EVENTS_ROUTE)}>
                    Мероприятия
                </Nav.Link>

            </Nav>

            {user.isAuth ?
                <Nav className="ml-auto" style={{color: 'white'}}>

                    {user.isAdmin ?
                        <Button
                            variant={"outline-danger"}
                            className={"admin_button"}
                            onClick={() => navigate(ADMIN_ROUTE)}
                        >
                            Админ панель
                        </Button>
                        :
                        <div></div>
                    }
                    <Button
                        variant={"outline-secondary"}
                        onClick={() => logOut()}
                        className={"ml-2"}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button variant={"outline-success"} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                </Nav>
            }
        </header>
    );
};

export default NavBar;