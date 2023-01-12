import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './global.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './routes/Home'
import { Error } from './routes/Error'
import { Projects } from './routes/Projects'
import { Project } from './routes/Project'
import { Abilities } from './routes/Abilities'
import { Contact } from './routes/Contact'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children:[
      {
        path:'/',
        element: <Home />,
      },
      {
        path:'/projects',
        element: <Projects />,
      },
      {
        path:'/projects',
        element: <Project />,
      },
      {
        path:'/abilities',
        element: <Abilities />,
      },
      {
        path:'/contact',
        element: <Contact />,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
