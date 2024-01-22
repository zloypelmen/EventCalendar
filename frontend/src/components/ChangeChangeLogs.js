import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {useContext} from "react";
import {Context} from "../index";
import {ListGroup} from "react-bootstrap";
import * as ChangesApi from "../http/ChangesApi";

const AccordionUsage = () => {
    const {changes} = useContext(Context)

    const reversedChanges = changes.changes.slice().reverse();
    const handleDeleteClick = (id) => {
        ChangesApi.deleteChange(id)
        window.location.reload()
    };
    return (
        <ListGroup>
        {reversedChanges.map(change =>
                <Accordion defaultExpanded key={change.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel3-content-${change.id}`}
                        id={`panel3-header-${change.id}`}
                    >
                        {change.title}
                    </AccordionSummary>
                    <AccordionDetails>
                        {change.description}
                    </AccordionDetails>
                    <AccordionActions>
                        <Button onClick={() => handleDeleteClick(change.id)}>DELETE</Button>
                    </AccordionActions>
                </Accordion>
            )}
        </ListGroup>
    );
}

export default AccordionUsage;