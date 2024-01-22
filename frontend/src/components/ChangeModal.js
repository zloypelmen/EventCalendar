import React, {useState} from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as ChangesApi from "../http/ChangesApi";
import "./ChangeModal.css"

const ChangeModal = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className={"change_modal"}>
            <TextField
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                label="Title"
                id="title-input"
            />
            <TextField
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                label="Description"
                id="description-input"
                margin="normal"
            />
            <Button
                onClick={() => {
                    ChangesApi.addNewChange(title, description);
                }}
                variant="contained"
                color="primary"  // Используйте "primary" вместо "success"
            >
                ADD
            </Button>
        </div>
    );
};

export default ChangeModal;