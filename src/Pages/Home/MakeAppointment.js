import React from 'react';
import Button from '../Shared/Button';
import doctor from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';

const MakeAppointment = () => {
    return (
        <div className="my-28 flex justify-center items-center" style={{
            background: `url(${appointment})`,
        }}
        >
            <div className="flex-1">
                <img className="sm:hidden lg:block mt-[-160px]" src={doctor} alt="Album" />
            </div>
            <div class="flex-1 text-white px-12">
                <h3 class="text-x1 text-primary">Appointment</h3>
                <h1 className="text-4xl mt-5 mb-10">Make an appointment Today</h1>
                <p className="text-lg mb-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>GET STARTED</Button>
            </div>
        </div>
    );
};

export default MakeAppointment;