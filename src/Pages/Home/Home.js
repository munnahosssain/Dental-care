import React from 'react';
import About from '../About/About';
import ContactUs from '../ContactUs/ContactUs';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import Info from './Info';
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