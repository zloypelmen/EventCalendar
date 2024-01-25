import React, { useState } from 'react';
import Card from "react-bootstrap/Card";
import "./PopupCard.css"
import cancel2 from "../assets/cancel2-svgrepo-com.svg"

const PopupCard = ({ event }) => {
    const [isPopupVisible, setIsPopupVisible] = useState(true);

    const today = new Date();

    const differenceInMilliseconds = event.day - today;
    const differenceInHours = Math.floor(differenceInMilliseconds / (1000 * 60 * 60));

    const handleHidePopup = () => {
        // Логика закрытия карточки
        setIsPopupVisible(false);

        // Через 1 минуту снова открываем карточку
        setTimeout(() => {
            setIsPopupVisible(true);
        }, 60000);
    };

    return (
        <div className={`popup-card ${isPopupVisible ? 'visible' : 'hidden'}`}>
            {isPopupVisible && (
                <Card>
                    <Card.Header className="notification-header">
                        <p className="qwertyuiop">Уведомление</p>

                        <button className="arrow button-close" onClick={handleHidePopup}>
                            <img src={cancel2} alt="close" className="material-icons-outlined text-gray-400" />
                        </button>
                    </Card.Header>
                    <Card.Body>
                        <Card.Title>{event.title}</Card.Title>
                        <Card.Text>{event.description}</Card.Text>
                        <Card.Footer>через {differenceInHours} часа</Card.Footer>

                    </Card.Body>
                </Card>
            )}
        </div>
    );
};
export default PopupCard;