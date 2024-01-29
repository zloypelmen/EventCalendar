import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as ActionsApi from "../http/ActionsApi";
import "./ActionModal.css"

const ActionModal = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [day, setDay] = useState('');
    const [author, setAuthor] = useState('');
    const [location, setLocation] = useState('');

    const handleAddAction = async () => {
        try {
            if (!title || !description || !day || !location || !author) {
                throw new Error('Заполните все поля');
            }

            await ActionsApi.addAction(title, description, day, location, author);

        } catch (error) {
            console.log(error.message);
        }

        window.location.reload();
    };

    return (
        <div className={"change_modal"}>
            <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                id="title-input"
                className={"inp"}
            />
            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                id="description-input"
                margin="normal"
                className={"inp"}
            />
            <TextField
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                label="Location"
                id="location-input"
                className={"inp"}
            />
            <TextField
                value={day}
                onChange={(e) => setDay(e.target.value)}
                label="Day"
                id="day-input"
                className={"inp"}
            />
            <TextField
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                label="Author"
                id="author-input"
                className={"inp"}
            />
            <Button
                onClick={handleAddAction}
                variant="contained"
                color="primary"
                className={"but"}
            >
                ADD
            </Button>
        </div>
    );
};

export default ActionModal;