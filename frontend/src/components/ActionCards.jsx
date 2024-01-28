import React, {useContext} from 'react';
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {ACTION_ROUTE, CALENDAR_ROUTE} from "../utils/consts";
import {useNavigate} from "react-router-dom";
import * as CalendarApi from "../http/CalendarApi";

const ActionCards = () => {
    const {actions} = useContext(Context)
    const navigate = useNavigate()

    const reversedActions = actions.actions.slice().reverse();

    console.log(actions)

    function handleSubmit(action) {
        CalendarApi.addEvent(action.title, action.description, action.label, action.day)
    }

    return (
        <div>
            <ListGroup className="listGroup">
                {Array.isArray(reversedActions) ? (
                    reversedActions.map(action => (
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
                    ))
                ) : (
                    <p>Данные отсутствуют или не являются массивом</p>
                )}
            </ListGroup>
        </div>
    );
};

export default ActionCards;