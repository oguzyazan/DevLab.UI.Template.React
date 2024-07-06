import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import configureStore from './redux/store';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import '@fortawesome/fontawesome-free/css/all.min.css';
import Login from './containers/Auth/Login';
import Register from './containers/Auth/Register';
import "./assets/styles/scss/hope-ui.scss"
import "./assets/styles/scss/custom.scss"
import "./assets/styles/scss/dark.scss"
import "./assets/styles/scss/rtl.scss"
import "./assets/styles/scss/customizer.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={configureStore()}>
        <React.StrictMode>
            <BrowserRouter>
                <Routes>
                    <Route path="/auth/login" exact element={<Login />} />
                    <Route path="/auth/register" exact element={<Register />} />
                    <Route
                        path="*"
                        element={<Navigate to="/auth/login" replace />}
                    />
                </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
