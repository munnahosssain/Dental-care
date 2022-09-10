import React from 'react';
import treatment from '../../assets/images/treatment.png';
import Button from '../Shared/Button';

const About = () => {
    return (
        <div className="card lg:card-side p-20">
            <div className="flex-1">
                <figure><img className="w-96" src={treatment} alt="Album" /></figure>
            </div>
            <div className="card-body flex-1 lg:items-center justify-center">
                <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>GET STARTED</Button>
            </div>
        </div>
    );
};

export default About;