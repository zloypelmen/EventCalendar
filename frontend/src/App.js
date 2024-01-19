import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar"
import {useContext, useEffect} from "react";
import {Context} from "./index";
import ContextWrapper from "./context/ContextWrapper";


function App() {
    const { user } = useContext(Context);

    useEffect(() => {

        console.log("user.isAuth changed:", user.isAuth);
    }, [user.isAuth]);

    useEffect(() => {

        console.log("user.isAdmin changed:", user.isAdmin);
    }, [user.isAdmin]);

    return (
        <ContextWrapper>

            <BrowserRouter>
                <NavBar />
                <AppRouter />
            </BrowserRouter>
        </ContextWrapper>
  );
}

export default App;
