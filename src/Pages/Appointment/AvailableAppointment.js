import { format } from 'date-fns';
import Booking from './Booking';
import { useQuery } from 'react-query';
import React, { useState } from 'react';
import Loading from '../Shared/Loading';
import AppointmentService from './AppointmentService';

const AvailableAppointment = ({ date }) => {
    const [treatment, setTreatment] = useState(null);
    const formattedDate = format(date, 'PP');

    const { data: selected, isLoading, refetch } = useQuery(['available',formattedDate], () => fetch(`http://localhost:5000/available?date=${formattedDate}`)
        .then(res => res.json())
    )
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="mt-[-100px]">
            <h1 className='text-center text-accent'>Available Services on {format(date, 'PP')}.</h1>
            <div className='grid grid-cols-1 md:grid-cols lg:grid-cols-3 gap-5 p-24'>
                {
                    selected?.map(service =>
                        <AppointmentService
                            key={service._id}
                            service={service}
                            setTreatment={setTreatment}
                        />
                    )
                }
            </div>
            {
                treatment && <Booking
                    date={date}
                    refetch={refetch}
                    treatment={treatment}
                    setTreatment={setTreatment}
                />
            }
        </div>
    );
};

export default AvailableAppointment;