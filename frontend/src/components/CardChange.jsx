import Card from 'react-bootstrap/Card';
import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import {type} from "@testing-library/user-event/dist/type";
import {getAllChanges} from "../http/ChangesApi";

const CardChange = () => {
    const {changes} = useContext(Context)

    const reversedChanges = changes.changes.slice().reverse();

    return (
        <ListGroup>
            {reversedChanges.map(change =>
                <Card>
                    <Card.Header>{change.title}</Card.Header>
                    <Card.Body>
                        <blockquote className="blockquote mb-0">
                            <p>
                                {' '}{change.description}{' '}
                            </p>
                            <footer className="blockquote-footer">
                                Будьте в центре событийс командой <cite title="Source Title">EventManager</cite>!
                            </footer>
                        </blockquote>
                    </Card.Body>
                </Card>
            )}

        </ListGroup>

    );
};

export default CardChange;