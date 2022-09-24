import React from 'react';
import Login from '../Login/Login';
import appointment from '../../assets/images/appointment.png';

const ContactUs = () => {
    return (
        <div className="hero min-h-screen" style={{
            background: `URL(${appointment})`,
            backgroundSize: 'cover',
        }}
        >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content flex-col lg:flex-row-reverse text-neutral-content">
                <div className="text-center lg:text-left p-6">
                    <h1 className="text-5xl font-bold p-6">Login now!</h1>
                    <p className="p-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <Login />
            </div>
        </div>
    );
};

export default ContactUs;