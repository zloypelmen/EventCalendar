import React from 'react';
import Card from "react-bootstrap/Card";
import Button from "@mui/material/Button";

const ActionCard = () => {
    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                        With supporting text below as a natural lead-in to additional content.
                    </Card.Text>
                    <Button variant="info">Подробнее</Button>{' '}
                    <Button variant="success">Success</Button>{' '}
                </Card.Body>
            </Card>

        </div>
    );
};

export default ActionCard;