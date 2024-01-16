import Card from 'react-bootstrap/Card';
import React, {useContext} from 'react';
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import "./CardChange.css"

const CardChange = () => {
    const {changes} = useContext(Context)

    const reversedChanges = changes.changes.slice().reverse();

    return (
        <ListGroup className="listGroup">
            {reversedChanges.map(change =>
                <Card className="card">
                    <Card.Header className = {"title"}>{change.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p className = {"description"}>
                                {' '}{change.description}{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Будьте в центре событий с командой <cite title="Source Title">EventManager</cite>!
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            )}

        </ListGroup>

    );
};

export default CardChange;