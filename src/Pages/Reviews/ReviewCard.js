import React from 'react';

const ReviewCard = (props) => {
    const { name, img, descriptions, location } = props.reviews;
    return (
        <div className="shadow-xl lg:max-w-lg py-24 ">
            <div className="card-body">
                <p>{descriptions}</p>
            </div>
            <div className="flex justify-center items-center">
                <figure><img src={img} alt="Album" /></figure>
                <div className='px-12'>
                    <h2 className="card-title">{name}</h2>
                    <h2 className="card-title">{location}</h2>
                </div>
            </div >
        </div >
    );
};

export default ReviewCard;