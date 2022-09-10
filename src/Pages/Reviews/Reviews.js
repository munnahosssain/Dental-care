import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const userReview = [
        {
            _id: 1,
            name: 'Winson harry',
            descriptions: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people1,
            location:'California'
        },
        {
            _id: 2,
            name: 'Winson harry',
            descriptions: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people2,
            location:'California'
        },
        {
            _id: 3,
            name: 'Winson harry',
            descriptions: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            img: people3,
            location:'California'
        },
    ];
    return (
        <section>
            <div className='flex justify-between p-20'>
                <div>
                    <h3 className='text-xl text-primary'>Testimonials</h3>
                    <h1 className='text-4xl'>What Our Patients Says</h1>
                </div>
                <div>
                    <img className='w-32 lg:w-48' src={quote} alt="quote" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-20'>
                {
                    userReview.map(reviews =>
                        <ReviewCard
                            key={reviews._id}
                            reviews={reviews}
                        />
                    )
                }
            </div>
        </section>
    );
};

export default Reviews;