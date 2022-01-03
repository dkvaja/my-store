import { Typography } from '@mui/material';
import React from 'react'
import { FooterWrapper } from './footer.styles';

const Footer = () => {
    return (
        <FooterWrapper>
            <Typography variant='body1' >
                Copyright &copy; My Store {new Date().getFullYear()}. All Right Reserved
            </Typography>
        </FooterWrapper>
    )
}

export default Footer
