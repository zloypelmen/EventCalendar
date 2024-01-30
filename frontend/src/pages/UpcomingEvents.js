import React, { useEffect, useState } from 'react';
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const UpcomingEvents = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        // Получение событий из localStorage
        const storedEvents = JSON.parse(localStorage.getItem('savedEvents')) || [];

        // Фильтрация прошедших событий
        const upcomingEvents = storedEvents.filter(event => new Date(Number(event.day)) > new Date());

        // Группировка событий по дате
        const groupedEvents = upcomingEvents.reduce((result, event) => {
            const dateKey = new Date(Number(event.day)).toLocaleDateString();
            result[dateKey] = result[dateKey] || [];
            result[dateKey].push(event);
            return result;
        }, {});

        // Преобразование в массив и сортировка групп по дате
        const sortedEvents = Object.values(groupedEvents).sort(
            (a, b) => new Date(Number(a[0].day)) - new Date(Number(b[0].day))
        );

        setEvents(sortedEvents);
    }, []);

    return (
        <div>
            <h2>Предстоящие события</h2>
            {events.length === 0 ? (
                <p>No upcoming events</p>
            ) : (
                <Grid container spacing={2} style={{ width: '70%', margin: '0 auto' }}>
                    {events.map((dayEvents, index) => (
                        <Grid item xs={12} key={index}>
                            <Paper elevation={3} style={{ padding: '10px', height: '100%' }}>
                                <Typography variant="h6">
                                    {new Date(Number(dayEvents[0].day)).toLocaleDateString()}
                                </Typography>
                                <ul>
                                    {dayEvents.map((event) => (
                                        <li key={event.id} style={{ color: event.label }}>
                                            {event.title}
                                        </li>
                                    ))}
                                </ul>
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            )}
        </div>
    );
};

export default UpcomingEvents;
