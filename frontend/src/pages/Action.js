import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {getActionById} from "../http/ActionsApi";
import Card from "react-bootstrap/Card";
import {ListGroup} from "react-bootstrap";
import actionImg from "../assets/action.svg"
import Button from "react-bootstrap/Button";
import {ACTIONS_ROUTE, CALENDAR_ROUTE} from "../utils/consts";
import * as CalendarApi from "../http/CalendarApi";

const Action = () => {
    const [action, setAction] = useState({info: []})
    const {id} = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        getActionById(id).then(data => setAction(data))
    }, [])

    function handleSubmit(action) {
        CalendarApi.addEvent(action.title, action.description, action.label, action.day)
    }

    return (
        <div style={{ height: '70vh' ,display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <Card style={{width: '80vw'}}>
                <Card.Img src={actionImg}  alt={"close"} style={{ height: '20vh',  objectFit: 'cover', }}/>
                <Card.Body>
                    <Card.Title>{action.title}</Card.Title>
                    <Card.Text>
                        {action.description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>Место проведения - {action.location}</ListGroup.Item>
                    <ListGroup.Item>
                        Дата - {new Date(Number(action.day)).toLocaleDateString()}
                    </ListGroup.Item>
                    <ListGroup.Item>Организатор - {action.author}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="secondary" onClick={() => navigate(ACTIONS_ROUTE)}>Вернуться</Button>{' '}
                    <Button variant="success" onClick={() => {
                        navigate(CALENDAR_ROUTE);
                        handleSubmit(action);
                    }}>
                        Добавить в Календарь
                    </Button>{' '}
                </Card.Body>
            </Card>
        </div>
    );
};

export default Action;