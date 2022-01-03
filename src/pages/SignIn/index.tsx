import React, { useState } from 'react'
import { SignInWrapper } from './signin.styles';
import { Backdrop, Box, Button, CircularProgress, TextField, Typography } from '@mui/material';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { HOME } from '../../constants/routes';
import { useDispatch } from 'react-redux';
import { getLoggedInUserData } from '../../redux/slices/userSlice';

// Types
type formInputs = {
    username: string,
    password: string
}

type res = {
    token: string
}


// component
const SignIn = () => {

    // States
    const [logInData, setLogInData] = useState<formInputs>({
        username: '',
        password: ''
    })
    const [error, setError] = useState<string>('')

    // Constants
    const { username, password } = logInData
    const navigate = useNavigate()
    const dispatch = useDispatch()

    // Helper Methods
    const sendLogInData = async (logInData: formInputs): Promise<res> =>
        await (await fetch('https://fakestoreapi.com/auth/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(logInData)
        })).json()


    // Handler Methods
    const handleOnChange = (name: string, value: any) => {
        setLogInData({ ...logInData, [name]: value })
    }

    // Handle SignIn success
    const handleSignInSuccess = (token: string) => {
        if (!token) return;
        localStorage.setItem('authToken', token);
        dispatch(getLoggedInUserData())
        navigate(HOME, { replace: true });
    }

    // Handle Submit Data 
    const { mutate, isLoading } = useMutation(sendLogInData, {
        onSuccess: ({ token }: res) => {
            handleSignInSuccess(token)
        },
        onError: () => {
            setError("there was an error")
        }
    });

    // Handle Submit Form
    const handleSubmitForm = async () => mutate(logInData);

    // Render Methods
    if (isLoading)
        return (
            <Backdrop
                sx={{ color: 'primary', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                open={true}
            >
                <CircularProgress color="inherit" />
            </Backdrop>
        )

    return (
        <SignInWrapper>
            <Box className='form-box' >
                <Typography variant='h4' color='primary' >Sign In</Typography>
                {error && <Typography variant='body1' color='error' >{error}</Typography>}
                <TextField
                    type='text'
                    value={username}
                    onChange={({ target }) => handleOnChange('username', target?.value)}
                    id="outlined-basic"
                    label="Username"
                    variant="outlined"
                    className='form-items'
                />
                <TextField
                    type='password'
                    onChange={({ target }) => handleOnChange('password', target?.value)}
                    value={password}
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    className='form-items'
                />
                <Button
                    variant='contained'
                    onClick={handleSubmitForm}
                >
                    Sign In
                </Button>
            </Box>
        </SignInWrapper>
    )
}

export default SignIn
