import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "./index.css";
import { PainelEventos } from "./pages/PainelEventos";

const router = createBrowserRouter([
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/login",
    element: <Login />,
  },

  {
    path: "/aluno/painel-eventos",
    element: <PainelEventos />,
  },
  {
    path: "/aluno/painel-eventos",
    element: <PainelEventos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
