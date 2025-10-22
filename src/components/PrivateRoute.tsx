import React, { type JSX } from 'react'
import { Navigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'


export const PrivateRoute: React.FC<{children: JSX.Element}> = ({ children }) => {
const { user } = useUser()
if(!user) return <Navigate to="/login" replace />
return children
}