import React from 'react';
import { useState } from 'react';

import FormGroup from '@mui/material/FormGroup';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';

const EmailForm = (props) => {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [successState, setSuccessState] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };


    const handleFormSubmit = async (event) => {
        event.preventDefault();

        setSuccessState(true);

        setFormState({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <form className="contact-us-form" onSubmit={handleFormSubmit}>
            <FormGroup className="form-group">
                <InputLabel htmlFor="contact-us-name" sx={{ fontSize: "small" }}>Name</InputLabel>
                <Input
                    className="form-input"
                    id="contact-us-name"
                    aria-describedby="contact-us-name-desc"
                    placeholder="Enter your name."
                    name="name"
                    type="text"
                    value={formState.name}
                    sx={{
                        fontSize: "small"
                    }}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="form-group">
                <InputLabel htmlFor="contact-us-email" sx={{ fontSize: "small" }}>Email</InputLabel>
                <Input
                    className="form-input"
                    id="contact-us-email"
                    aria-describedby="contact-us-email-desc"
                    placeholder="Enter your email."
                    name="email"
                    type="email"
                    value={formState.email}
                    sx={{
                        fontSize: "small"
                    }}
                    onChange={handleChange}
                />
            </FormGroup>
            <FormGroup className="form-group">
                <InputLabel htmlFor="contact-us-message" sx={{ fontSize: "small" }}>Message</InputLabel>
                <Input
                    className="form-input"
                    id="contact-us-message"
                    aria-describedby="contact-us-message-desc"
                    placeholder="Enter your message."
                    name="message"
                    type="text"
                    value={formState.message}
                    sx={{
                        fontSize: "small"
                    }}
                    onChange={handleChange}
                />
            </FormGroup>
            <button className="filled-btn" type="submit">
                Submit
            </button>
            {successState && (
                <p className="submit-success-message">Your message has been successfully sent.</p>
            )}
        </form>
    );
};

export default EmailForm;