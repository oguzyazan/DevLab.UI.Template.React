import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Index from "./containers/index";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";
import "./assets/styles/scss/hope-ui.scss";
import "./assets/styles/scss/custom.scss";
import "./assets/styles/scss/dark.scss";
import "./assets/styles/scss/rtl.scss";
import "./assets/styles/scss/customizer.scss";
import List from "./containers/Template/List";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Index />} />
          <Route path="/auth/login" exact element={<Login />} />
          <Route path="/auth/register" exact element={<Register />} />
          <Route path="/template/list" exact element={<List />} />
          <Route path="*" element={<Navigate to="/auth/login" replace />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
