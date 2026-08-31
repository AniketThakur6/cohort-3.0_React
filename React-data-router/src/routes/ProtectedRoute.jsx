import React from 'react'
import { Navigate, Outlet } from 'react-router'

const ProtectedRoute = ({isAdmin}) => {

  if(!isAdmin){
    return <Navigate to='/login' replace />
  }
  return <Outlet />
}

export default ProtectedRoute