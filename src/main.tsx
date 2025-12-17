import App from "./App"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Login from './pages/Login'
import './index.css'
import { PainelEventos } from './pages/aluno/PainelEventos'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div className="flex items-center justify-center min-h-screen"><h1>Bem-vindo ao PreCampus</h1></div>,
  },

  {
    path: '/login',
    element: <Login />,
  },

  {
    path: '/aluno/painel-eventos',
    element: <PainelEventos/>,
  }
])
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
