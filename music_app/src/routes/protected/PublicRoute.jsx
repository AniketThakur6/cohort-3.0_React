import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router'
import { AuthContext } from '../../context/AuthContext'

const PublicRoute = () => {
  
  const {loggedIn} = useContext(AuthContext)

  if(loggedIn){
    return <Navigate to="/home" replace />
  }
  
  return <Outlet/>
}

export default PublicRoute