import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom';

// This component wraps around any route needs to be protected
const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext);

    // If user is not logged in, redirect to sign in
    if (!user) {
        return <Navigate to='/auth/signin' replace />
    }

    // Else render the protected content
    return children;
}

export default ProtectedRoute