import React from 'react';
import Info from './Info';
import Banner from './Banner';
import About from '../About/About';
import Footer from '../Shared/Footer';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import ContactUs from '../ContactUs/ContactUs';
import MakeAppointment from './MakeAppointment';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <About />
            <MakeAppointment />
            <Reviews />
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Home;