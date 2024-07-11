import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import configureStore from "./redux/store";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import Login from "./containers/Auth/Login";
import Register from "./containers/Auth/Register";
import "./assets/styles/scss/hope-ui.scss";
import "./assets/styles/scss/custom.scss";
import "./assets/styles/scss/dark.scss";
import "./assets/styles/scss/rtl.scss";
import "./assets/styles/scss/customizer.scss";
import List from "./containers/Template/List";
import Default from "./layouts/Default";
import Dashboard from "./containers/Template/Dashboard";
import Blank from "./containers/Template/Blank";
import Maintenance from "./containers/Errors/Maintenance";
import Error500 from "./containers/Errors/Error500";
import Error404 from "./containers/Errors/Error404";
import UserList from "./containers/User/user-list";
import UserAdd from "./containers/User/user-add";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={configureStore()}>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/errors/error404" exact element={<Error404 />} />
          <Route path="/errors/error500" exact element={<Error500 />} />
          <Route path="/errors/maintenance" exact element={<Maintenance />} />
          <Route path="/auth/login" exact element={<Login />} />
          <Route path="/auth/register" exact element={<Register />} />
          <Route element={<Default />}>
            <Route path="/template/dashboard" exact element={<Dashboard />} />
            <Route path="/template/list" exact element={<List />} />
            <Route path="/template/blank" exact element={<Blank />} />
            <Route path="/user/user-list" exact element={<UserList />} />
            <Route path="/user/user-add" exact element={<UserAdd />} />
          </Route>
          <Route
            path="*"
            element={<Navigate to="/template/dashboard" replace />}
          />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);

reportWebVitals();
