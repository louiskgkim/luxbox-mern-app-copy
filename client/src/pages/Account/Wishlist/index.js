import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import Auth from '../../../utils/auth';

const Wishlist = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!Auth.loggedIn()) {
            return navigate('/account/sign-in');
        }
    }, [navigate]);
    return (
        <section className="main-content-container">
            <div className="main-content-row">
                <h3>Wishlist</h3>
            </div>
            <div className="main-content-row">
                <p>Wishlist will be updated!</p>
            </div>
        </section>
    );
};

export default Wishlist;