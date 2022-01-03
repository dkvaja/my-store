import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { SIGN_IN } from '../../../constants/routes';

const PrivateRoute = ({ children }: { children: JSX.Element }) => {

    const location = useLocation();

    const isUserLoggedIn = localStorage.getItem('authToken');

    if (!isUserLoggedIn) return <Navigate to={SIGN_IN} state={{ from: location }} />

    return children
}

export default PrivateRoute
