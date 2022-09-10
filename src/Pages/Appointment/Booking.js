import { format } from 'date-fns';
import React from 'react';

const Booking = ({ treatment, date, setTreatment }) => {
    const {_id, name, slots } = treatment;
    const handleBooking = (event) => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(_id, name, slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="Booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="Booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg mb-5">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className="grid justify-items-center">
                        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs mb-5" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option key={slot._id} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" placeholder="Your Name" className="input input-bordered w-full max-w-xs mt-5 mb-5" />
                        <input type="email" name="email" placeholder="Email Address" className="input input-bordered w-full max-w-xs mb-5" />
                        <input type="phone" name="phone" placeholder="Phone Number" className="input input-bordered w-full max-w-xs mb-5" />
                        <input type="submit" value="Submit" className="btn button-accent input-bordered w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div >
    );
};

export default Booking;