import React from 'react'
import { Navigate } from 'react-router-dom';
import { HOME } from '../../../constants/routes';

const PublicRoute = ({ children }: { children: JSX.Element }) => {
    if (localStorage.getItem('authToken')) return <Navigate to={HOME} />
    return children
}

export default PublicRoute
