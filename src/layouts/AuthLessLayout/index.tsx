import React from 'react'
import { Outlet } from 'react-router-dom';
import { AuthLessWrapper } from './authlessWrapper.styles';

const AuthLessLayout: React.FC = () => {


    return (
        <AuthLessWrapper>
            <Outlet />
        </AuthLessWrapper>
    )
}

export default AuthLessLayout
