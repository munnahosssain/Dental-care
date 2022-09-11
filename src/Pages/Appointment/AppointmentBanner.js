import React from 'react';
import 'react-day-picker/dist/style.css';
import { DayPicker } from 'react-day-picker';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = ({ date, setDate }) => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={chair} alt=''className="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <DayPicker
                        styles={{
                            caption: { color: 'red' }
                        }}
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        showOutsideDays
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;