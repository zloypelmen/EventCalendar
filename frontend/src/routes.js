import {
    ABOUT_ROUTE,
    ADMIN_ROUTE,
    CALENDAR_ROUTE,
    ADMIN_ACTIONS_ROUTE,
    ACTIONS_ROUTE,
    ACTION_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    NEW_CHANGE_ROUTE
} from "./utils/consts";
import Admin from "./pages/Admin";
import Calendar from "./pages/Calendar";
import About from "./pages/About";
import Auth from "./pages/Auth.js";
import ChangeLog from "./pages/ChangeLog";
import Actions from "./pages/Actions";
import Action from "./pages/Action";
import AdminActions from "./pages/AdminActions";

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
    {
        path: ACTIONS_ROUTE,
        Component: Actions
    },
    {
        path: ACTION_ROUTE + '/:id',
        Component: Action
    },
    {
        path: ADMIN_ACTIONS_ROUTE,
        Component: AdminActions
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