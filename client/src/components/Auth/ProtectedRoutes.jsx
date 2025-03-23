import React from 'react'
import {Navigate} from "react-router-dom"

const ProtectedRoutes = ({children}) => {
    const isAuthenticated = localStorage.getItem("token")
  return isAuthenticated ? <Navigate to="/"/> : children
}

export default ProtectedRoutes