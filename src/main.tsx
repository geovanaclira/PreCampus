import App from "./App"
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Register from "./Pages/register"
import Login from './Pages/Login'
import './index.css'
import { PainelEventos } from './Pages/aluno/PainelEventos'

const router = createBrowserRouter([
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/',  
    element: <App />,
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
    <RouterProvider router={router}/>
  </React.StrictMode>
)
