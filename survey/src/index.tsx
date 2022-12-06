import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import {RegisterContextProvider} from "./Context/RegisterContext";
// import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Router>
        <RegisterContextProvider>
            <App/>
        </RegisterContextProvider>
    </Router>
);

// reportWebVitals();
