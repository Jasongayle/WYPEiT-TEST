import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth()

  if (!user || !user.isAdmin) {
    return <Navigate to="/admin/login" replace />
  }

  return <>{children}</>
}

export default AdminRoute