import React from 'react';
import Services from '../Services/Services';
import Banner from './Banner';
import Info from './Info';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Info/>
            <Services/>
        </div>
    );
};

export default Home;