import axios from "axios";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import "./index.css";
import MainLayout from "./layouts/MainLayout";
import Profile from "./Pages/Profile";
import Register from "./Pages/register";
import RecoverRequest from "./Pages/PasswordRecovery/Request";
import RecoverReset from "./Pages/PasswordRecovery/Reset";
import RecoverSuccess from "./Pages/PasswordRecovery/Sucess";


axios.defaults.baseURL = import.meta.env.VITE_AXIOS_BASE_URL;
axios.defaults.withCredentials = true;

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "/profile", Component: Profile },
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
