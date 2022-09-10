import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import AppointmentService from './AppointmentService';
import Booking from './Booking';

const AvailableAppointment = ({ date }) => {
    const [selected, setSelected] = useState([]);
    const [treatment, setTreatment] = useState(null);
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(red => red.json())
            .then(data => setSelected(data))
    }, [])
    return (
        <div className="mt-[-150px]">
            <h1 className='text-center text-accent'>Available Services on {format(date, 'PP')}.</h1>
            <div className='grid grid-cols-1 md:grid-cols lg:grid-cols-3 gap-5 p-24'>
                {
                    selected.map(service =>
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
                    treatment={treatment}
                    setTreatment={setTreatment}
                />
            }
        </div>
    );
};

export default AvailableAppointment;