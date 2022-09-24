import App from '../../App.css';
import React from 'react';
import chair from '../../assets/images/chair.png';
import Button from '../Shared/Button';
import bgChair from '../../assets/images/bg.png';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div style={{ background:`URL(${bgChair})`}} className="hero min-h-screen px-5 bg-white ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} alt="" className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Link to='/appointment'><Button>GET STARTED</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;

