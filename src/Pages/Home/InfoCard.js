import React from 'react';

const InfoCard = ({ img, cardTitle, description, bgClass }) => {
    return (
        <div className={`card lg:card-side shadow-xl bg-primary m-4 ${bgClass}`}>
            <figure><img className='m-4' src={img} alt="Album" /></figure>
            <div className="card-body text-white">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;