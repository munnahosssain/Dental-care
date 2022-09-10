import React from 'react';

const Service = (props) => {
    const { name, description, img } = props.services;
    return (
        <div className="card lg:max-w-lg sm:max-w-sm md:max-w-md shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;