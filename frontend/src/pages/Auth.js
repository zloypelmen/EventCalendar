import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import {BrowserRouter, NavLink, useLocation} from "react-router-dom";
import {CALENDAR_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {login, registration} from "../http/userApi";
import { useNavigate } from "react-router-dom";
import AppRouter from "../components/AppRouter";
import {makeAutoObservable} from "mobx";

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {

            if (isLogin) {
                await login(email, password);
            } else {
                await registration(email, password);
            }
            if (email === "admin@mail.ru"){
                user.setIsAdmin(true)
            }
            user.setUser(user)
            user.setIsAuth(true)

            console.log(user)
            console.log("10500" + user.isAdmin)
            console.log("1" + user.isAuth)
            navigate(CALENDAR_ROUTE)
            console.log("2" + user.isAuth)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}
        >
            <Card className="p-5" style={{width: 600}}>
                <h2 className="m-auto">{isLogin ? 'Авторизация' : "Регистрация"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш email..."
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Введите ваш пароль..."
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                            </div>
                        }
                        <Button
                            variant={"outline-success"}
                            className={"mt-3"}
                            onClick={click}
                        >
                            {isLogin ? 'Войти' : 'Регистрация'}
                        </Button>
                    </Row>

                </Form>
            </Card>

        </Container>
    );
};

export default Auth;