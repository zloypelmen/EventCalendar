import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import {ABOUT_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";


const AppRouter = observer(() => {
    const {user} = useContext(Context);
    const {changes} = useContext(Context);

    console.log(user)
    console.log(changes)

    return (
        <Routes>
            {localStorage.getItem("isAuth") == 1 && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} />
            )}
            <Route path="*" element={<Navigate to={ABOUT_ROUTE} />} />
        </Routes>
    );
});


export default AppRouter;