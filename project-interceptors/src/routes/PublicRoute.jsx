import React, { useContext } from 'react'
import { Auth } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router'

const PublicRoute = () => {

  const {loggedIn} = useContext(Auth)

  if(loggedIn){
    return <Navigate to='/home' />
  }

  return <Outlet />
}

export default PublicRoute