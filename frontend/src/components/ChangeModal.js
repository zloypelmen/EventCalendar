import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as ChangesApi from "../http/ChangesApi";
import "./ChangeModal.css"

const ChangeModal = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleAddChange = async () => {
        try {

            if (!title || !description) {
                throw new Error('Заполните все поля');
            }

            await ChangesApi.addNewChange(title, description);


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
                className={"title_inp"}
            />
            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                id="description-input"
                margin="normal"
                className={"description_inp"}
            />
            <Button
                onClick={handleAddChange}
                variant="contained"
                color="primary"
            >
                ADD
            </Button>
        </div>
    );
};

export default ChangeModal;