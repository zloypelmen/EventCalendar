import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import {ListGroup} from "react-bootstrap";
import * as ChangesApi from "../http/ChangesApi";
import * as ActionsApi from "../http/ActionsApi";

const AccordionUsage = ({data, type }) => {

    const handleDeleteClick = (id) => {
        if (type === 'changes') {
            ChangesApi.deleteChange(id);
        } else if (type === 'actions') {
            ActionsApi.deleteAction(id);
        }
        window.location.reload();
    };

    return (
        <ListGroup>
        {data.map(note =>
                <Accordion defaultExpanded key={note.id}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel3-content-${note.id}`}
                        id={`panel3-header-${note.id}`}
                    >
                        {note.title}
                    </AccordionSummary>
                    <AccordionDetails>
                        {note.description}
                    </AccordionDetails>
                    <AccordionActions>
                        <Button onClick={() => handleDeleteClick(note.id)}>DELETE</Button>
                    </AccordionActions>
                </Accordion>
            )}
        </ListGroup>
    );
}

export default AccordionUsage;