import React, {useState} from 'react';
import {Carousel} from "react-bootstrap";
import refactor from "../assets/refactor.png"
import create from "../assets/create.png"
import main from "../assets/main.png"
import "./MainSlider.css"

const MainSlider = () => {

    return (
        <Carousel>
            <Carousel.Item className={" slider_container"}>
                <img className={"slider_img"} src={main} alt="main"/>
                <Carousel.Caption>
                    <h3 className={"helf3"}>Планируй</h3>
                    <p className={"parag"}>Смотри за графиком своего свободного времени вместе с EventManager!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className={"slider_container"}>
                <img className={"slider_img"} src={create} alt="create"/>
                <Carousel.Caption>
                    <h3 className={"helf3"}>Создавай</h3>
                    <p className={"parag"}>Добавляй новые или недавно запланированные мероприятия!</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item className={"slider_container"}>
                <img className={"slider_img"} src={refactor} alt="refactor"/>
                <Carousel.Caption>
                    <h3 className={"helf3"}>Редактируй</h3>
                    <p className={"parag"}>
                        Редактируй свои события, чтобы всегда всё держать под контролем!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default MainSlider;