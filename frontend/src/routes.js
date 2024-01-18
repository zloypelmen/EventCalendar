import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CALENDAR_ROUTE,
    EVENT_ROUTE,
    EVENTS_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    NEW_CHANGE_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Auth from "./pages/Auth.js";
import ChangeLog from "./pages/ChangeLog"

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
        path: NEW_CHANGE_ROUTE,
        Component: ChangeLog
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