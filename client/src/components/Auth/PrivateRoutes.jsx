import React from 'react'
import { Route, Navigate } from 'react-router-dom'

const PrivateRoutes = ({children}) => {
    const isAuthenticated = localStorage.getItem("token")
  return isAuthenticated ? children : <Navigate to="/login" />
}

export default PrivateRoutes