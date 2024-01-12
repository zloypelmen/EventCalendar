import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CALENDAR_ROUTE,
    EVENT_ROUTE,
    EVENTS_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Calendar from "./pages/Calendar";
import Events from "./pages/Events";
import About from "./pages/About";
import Event from "./pages/Event";
import Auth from "./pages/Auth.js";

export  const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: CALENDAR_ROUTE,
        Component: Calendar
    },
    {
        path: EVENTS_ROUTE,
        Component: Events
    },
    {
        path: EVENT_ROUTE + '/:id',
        Component: Event
    },
]

export const publicRoutes = [
    {
        path: ABOUT_ROUTE,
        Component: About
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
]