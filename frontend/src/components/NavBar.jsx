import logo from "../assets/calendar.svg"
import "./NavBar.css"
import {Nav, NavDropdown} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {useContext} from "react";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";
import {ABOUT_ROUTE, ADMIN_ROUTE, LOGIN_ROUTE} from "../utils/consts";

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
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>

            {user.isAuth ?

                <Nav className="ml-auto" style={{color: 'white'}}>
                    <Button
                        variant={"outline-danger"}
                        onClick={() => navigate(ADMIN_ROUTE)}
                        className="admin_button"
                    >
                        Админ панель
                    </Button>
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