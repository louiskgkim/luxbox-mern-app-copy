import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useMutation } from '@apollo/client';

import { LOGIN_USER } from '../../utils/mutations';

import Auth from '../../utils/auth';

import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error, data }] = useMutation(LOGIN_USER);

    const navigate = useNavigate("/");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await login({
                variables: { ...formState },
            });

            Auth.login(data.login.token);
        } catch (err) {
            console.error(err);
        }

        setFormState({
            email: '',
            password: '',
        });
    };

    return (
        <section className="main-content-container">
            <div className="main-content-row">
                <h3>Sign in</h3>
            </div>
            <div className="main-content-row">
                {data
                    ? (
                        <p>test</p>
                    )
                    : (
                        <div className="login-form-wrapper">
                            <form className="login-form" onSubmit={handleFormSubmit}>
                                <FormGroup className="form-group">
                                    <InputLabel htmlFor="login-email" sx={{ fontSize: "small" }}>Email</InputLabel>
                                    <Input
                                        className="form-input"
                                        id="login-email"
                                        aria-describedby="login-email-desc"
                                        placeholder="Enter your email."
                                        name="email"
                                        type="email"
                                        value={formState.email}
                                        sx={{
                                            fontSize: "small"
                                        }}
                                        onChange={handleChange}
                                    />
                                    <FormHelperText className="form-helper-text" id="login-email-desc">*Guest ID: guest@gmail.com</FormHelperText>
                                </FormGroup>
                                <FormGroup className="form-group">
                                    <InputLabel htmlFor="login-pw" sx={{ fontSize: "small" }}>Password</InputLabel>
                                    <Input
                                        className="form-input"
                                        id="login-pw"
                                        aria-describedby="login-pw-desc"
                                        placeholder="******"
                                        name="password"
                                        type="password"
                                        value={formState.password}
                                        sx={{
                                            fontSize: "small"
                                        }}
                                        onChange={handleChange}
                                    />
                                    <FormHelperText className="form-helper-text" id="login-pw-desc">*Guest PW: 1234</FormHelperText>
                                </FormGroup>
                                <button className="filled-btn" type="submit">Sign In</button>
                            </form>
                            <div className="link-to-register-wrapper">
                                <p>Don't have an account?</p>
                                <Link to="/account/register" className="link">
                                    <button className="outlined-btn" id="create-account-btn">Create Account</button>
                                </Link>
                            </div>
                        </div>
                    )
                }
                {error && (
                    <div>
                        {error.message}
                    </div>
                )}
            </div>
        </section >
    );
};

export default Login;