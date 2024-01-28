import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UserStore from "./store/UserStore";
import NewChangesStore from "./store/NewChangesStore";
import ActionStore from "./store/ActionStore";

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{
        user: new UserStore(),
        changes: new NewChangesStore(),
        actions: new ActionStore()
    }}>
            <App />


    </Context.Provider>
);