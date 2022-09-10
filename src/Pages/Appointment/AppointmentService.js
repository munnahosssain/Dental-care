import React from 'react';

const AppointmentService = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div className="card lg:max-w-lg shadow-lg">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>
                    {
                        slots.length > 0
                            ? <span>{slots[0]}</span>
                            : <span className='text-red'>Try Another day</span>
                    }
                </p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} Available</p>
                <div>
                    <label
                        onClick={() => setTreatment(service)}
                        disabled={slots.length === 0}
                        htmlFor="Booking-modal"
                        className="btn btn-secondary"
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentService;