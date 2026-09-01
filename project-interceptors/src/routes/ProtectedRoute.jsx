import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = () => {

  const {loggedIn} = useContext(Auth)

  if(!loggedIn){
    return <Navigate to="/" />
  }

  return <Outlet />
}

export default ProtectedRoute