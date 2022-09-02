import App from '../../App.css';
import React from 'react';
import chair from '../../assets/images/chair.png';
import Info from './Info';

const Banner = () => {
    return (
        <div>
            <div class="hero min-h-screen bg-base-200 bg-white">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={chair} alt="" class="max-w-lg rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                        <p class="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <button class="btn-grad btn-grad:hover">GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

