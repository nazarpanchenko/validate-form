import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import './login.scss';

const Login = () => {
    const backgroundImage = {
        backgroundIimage: `url('../../assets/bg.jpg'), url('../../assets/bottom-bg.jpg')`,
        backgroundPosition: `center center, bottom left`,
        backgroundSize: `cover, cover`,
        backgroundAttachment: `fixed, fixed`,
        backgroundRepeat: `no-repeat, no-repeat`,
        backgroundColor: `#eef2f5`
    };

    return (
        <main>
            <FormControl style={backgroundImage}>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">
                    We'll never share your email.
                </FormHelperText>
            </FormControl>
        </main>
    );
};

export default Login;
