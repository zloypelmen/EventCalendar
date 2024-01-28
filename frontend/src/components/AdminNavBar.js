import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ACTIONS_ROUTE, ADMIN_CHANGES_ROUTE, ADMIN_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";

const AdminNavBar = () => {
    const navigate = useNavigate()

    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container className={"d-flex justify-content-center"}>
                    <Nav>
                        <Nav.Link onClick={() => navigate(ADMIN_ROUTE)}>Руководство администратора</Nav.Link>
                        <Nav.Link onClick={() => navigate(ADMIN_CHANGES_ROUTE)}>Управление нововведениями</Nav.Link>
                        <Nav.Link onClick={() => navigate(ADMIN_ACTIONS_ROUTE)}>Управление мероприятиями</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default AdminNavBar;