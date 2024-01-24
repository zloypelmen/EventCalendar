import React from 'react';
import Card from "react-bootstrap/Card";

const MessageCard = (props) => {
    const { title, day } = props;

    console.log(day)

    const today = new Date();

    const differenceInMilliseconds = day - today;
    console.log("разница " + differenceInMilliseconds)
    const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));

    return (
        <div>
            <Card>
                <Card.Body>{title} - через {differenceInHours} часов</Card.Body>
            </Card>
        </div>
    );
};

export default MessageCard;