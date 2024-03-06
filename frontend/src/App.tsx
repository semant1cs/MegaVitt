import React from 'react';
import AppRouter from "./router";
import {BrowserRouter} from "react-router-dom";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
};

export default App;
