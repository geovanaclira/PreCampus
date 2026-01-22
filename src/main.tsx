import axios from "axios";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";

import React from "react";

import Login from "./pages/Login";
import MainLayout from "./layouts/MainLayout";
import Profile from "./pages/Profile";
import Register from "./pages/register";
import Favorites from "./pages/Favorites";
import RecoverRequest from "./pages/PasswordRecovery/Request";
import RecoverReset from "./pages/PasswordRecovery/Reset";
import RecoverSuccess from "./pages/PasswordRecovery/Sucess";
import { Event } from "./pages/event";
import PainelEventos from "./pages/PainelEventos";
import MyConfirmedEvents from "./pages/MyEvents";

import "./index.css";

axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: PainelEventos },
      { path: "profile", Component: Profile },
      { path: "favorites", Component: Favorites },
      { path: "my-events", Component: MyConfirmedEvents },
      { path: "event", Component: Event },
    ],
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    Component: Register,
  },
  {
    path: "/recover-password",
    Component: RecoverRequest,
  },
  {
    path: "/recover-password/reset",
    Component: RecoverReset,
  },
  {
    path: "/recover-password/Sucess",
    Component: RecoverSuccess,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
