import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import { PainelEventos } from './pages/aluno/PainelEventos'

const router = createBrowserRouter([
  {
    path: '/',

  },

  {
    path: '/login',
    // element: ,
  },

  {
    path: '/aluno/painel-eventos',
    element: <PainelEventos/>,
  }
])
 
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
