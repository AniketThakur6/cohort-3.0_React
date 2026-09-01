import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Main from '../layouts/MainLayout'
import ContactPage from '../pages/ContactPage'
import AboutPage from '../pages/AboutPage'
import HomePage from '../pages/HomePage'

const AppRoutes = () => {
  
  const router = createBrowserRouter([
    {
      path:'/',
      element:<Main />,
      children:[
        {
          path:"",
          element:<HomePage />
        },
        {
          path:"about",
          element:<AboutPage />
        },
        {
          path:"contact",
          element:<ContactPage />
        }
      ]
    }
  ])
  
  
  return <RouterProvider router={router} />
}

export default AppRoutes