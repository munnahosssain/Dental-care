import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const MyAppointment = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    console.log(user.displayName);
    useEffect(() => {
        if (user) {
            fetch(`http://localhost:5000/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => res.json())
                .then(data => setAppointments(data))
        }
    }, [user])
    return (
        <div className="overflow-x-auto">
            <table className="table table-zebra w-full mt-4">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Service</th>
                        <th>Time</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        appointments.map((appointment, index) =>
                            <tr>
                                <th>{index + 1}</th>
                                <td>{appointment.patientName}</td>
                                <td>{appointment.treatment}</td>
                                <td>{appointment.slot}</td>
                                <td>{appointment.date}</td>
                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyAppointment;