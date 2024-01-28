import React, {useContext, useState} from 'react';
import {Container, Form} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { NavLink, useLocation} from "react-router-dom";
import {ABOUT_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {Context} from "../index";
import { login, registration} from "../http/userApi";
import { useNavigate } from "react-router-dom";
import * as userApi from "../http/userApi";

const Auth = () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;

            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            if (email === "admin@mail.ru"){
                user.setIsAdmin(true)
                localStorage.setItem('isAdmin', "1")
            }
            user.setUser(user)
            console.log(data)

            user.setToken(data)
            localStorage.setItem('closestEvent', '{"title":"Доборо пожаловать","description":"Добавь свую первую запись на странице Календарь","label":"green","day":"1706389200000","id":48,"createdAt":"2024-01-25T11:07:18.979Z","updatedAt":"2024-01-25T11:07:18.979Z","userId":4}')
            localStorage.setItem('savedEvents', "")
            localStorage.setItem('isAuth', "1")
            localStorage.setItem('userId', await userApi.getUserId(email))
            user.setIsAuth(true)

            navigate(ABOUT_ROUTE)
            window.location.reload();
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