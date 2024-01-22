import React from 'react';
import {TextField} from "@mui/material";
import Button from "@mui/material/Button";
import * as ChangesApi from "../http/ChangesApi";

const ChangeModal = () => {
    return (
        <div>
            <TextField title label="Title" id="margin-normal" />
            <TextField description label="Dedcription" id="margin-normal" margin="normal" />
            <Button onClick={() => {
                ChangesApi.addNewChange(title, description);
            }}
                    variant="contained" color="success">
                ADD
            </Button>
        </div>
    );
};

export default ChangeModal;