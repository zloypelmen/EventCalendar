import React, {useEffect, useState} from 'react';
import {getAllActions} from "../http/ActionsApi";
import Card from "react-bootstrap/Card";
import {ListGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {ACTION_ROUTE, CALENDAR_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import * as CalendarApi from "../http/CalendarApi";

const Actions = () => {
    const [actions, setActions] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        getAllActions().then(data => {

            const sortedActions = data.sort((a, b) => a.day - b.day);
            setActions(sortedActions);
        });
    }, []);

    function handleSubmit(action) {
        CalendarApi.addEvent(action.title, action.description, action.label, action.day)
    }

    return (
        <div>
            <ListGroup className="listGroup">
                {actions.map(action =>
                    <Card className="card">
                        <Card.Header className = {"title"}>{action.title}</Card.Header>
                        <Card.Body>
                            <blockquote className="blockquote mb-0">
                                <p className = {"description"}>
                                    {' '}{action.description}{' '}
                                </p>
                                <footer className="blockquote-footer">
                                    <cite title="Source Title">Дата - {new Date(Number(action.day)).toLocaleDateString()}</cite>!
                                </footer>
                            </blockquote>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="secondary" onClick={() => navigate(ACTION_ROUTE + `/${action.id}`)}>Подробнее</Button>{' '}
                            <Button variant="success" onClick={() => {
                                navigate(CALENDAR_ROUTE);
                                handleSubmit(action);
                            }}>
                                Добавить в Календарь
                            </Button>{' '}

                        </Card.Footer>
                    </Card>
                )}
            </ListGroup>


        </div>
    );
};

export default Actions;