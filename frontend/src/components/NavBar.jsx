import logo from "../assets/calendar.svg"
import "./NavBar.css"
import {Nav} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useContext} from "react";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, CALENDAR_ROUTE, EVENTS_ROUTE, LOGIN_ROUTE} from "../utils/consts";

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

            <Nav className="me-auto">
                <Nav.Link>
                    onClick={() => navigate(ABOUT_ROUTE)}
                    Главная
                </Nav.Link>
                <Nav.Link>

                    Последние изменения
                </Nav.Link>
            </Nav>

            {user.isAuth ?


                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button
                        variant={"outline-danger"}
                        onClick={() => navigate(CALENDAR_ROUTE)}
                        className="admin_button"
                    >
                        Календарь
                    </Button>

                    <Nav.Link>
                        onClick={() => navigate(EVENTS_ROUTE)}
                        Мероприятия
                    </Nav.Link>

                    {user.isAdmin ?
                        <Button
                            variant={"outline-dark"}
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
                    <Button className={"admin_button"} variant={"outline-secondary"} onClick={() => navigate(ABOUT_ROUTE)}>Главная</Button>
                    <Button variant={"outline-success"} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                </Nav>
            }
        </header>
    );
};

export default NavBar;