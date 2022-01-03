import { Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { NotFoundWrapper } from './notFound.styles';

const NotFound = () => {
    return (
        <NotFoundWrapper>
            <div>
                <Typography variant='h3' color='orangered' sx={{ mt: 1 }} >Oops! We can't find that page</Typography>
                <NavLink to={'/'} >{"<--- Go back to home--<<"}</NavLink>
            </div>
            <img src="https://i.imgur.com/qIufhof.png" alt="Not Found" />
        </NotFoundWrapper>
    )
}

export default NotFound
