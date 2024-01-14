import logo from "../assets/calendar.svg"
import "./NavBar.css"
import {Nav} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useContext} from "react";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, CALENDAR_ROUTE, EVENTS_ROUTE, LOGIN_ROUTE, NEW_CHANGE_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import MainSlider from "./MainSlider";
import NavigationNav from "./NavigationNav";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    console.log(user.isAdmin)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        user.setIsAdmin(false)
        navigate(LOGIN_ROUTE)
    }

    return (
        <header>
            <img src={logo} alt="calendar" />
            <h1>
                EventCalendar
            </h1>

            <NavigationNav/>

            {user.isAuth ?

                <Nav className="nav-buttons" style={{color: 'white'}}>

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
                        className={"ml-2 admin_button"}
                    >
                        Выйти
                    </Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button className={"admin_button"} variant={"outline-success"} onClick={() => navigate(LOGIN_ROUTE)}>Войти</Button>
                </Nav>
            }
        </header>
    );
});

export default NavBar;