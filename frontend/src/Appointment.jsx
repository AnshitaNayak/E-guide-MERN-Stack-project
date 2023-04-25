import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

const Appointment = () => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [user, setUser] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('http://localhost:8080/api/appointments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                date,
                time,
                user
            })
        })
        console.log(response);
        const data = await response.json();
        console.log(data.status);
        if (data.status === 'ok') {
            alert('Booking confirmed successfully!!');
            window.location.href = '/';
        }

        // axios.post("/api/appointments", { date, time, user }.then(console.log('done')));
        setDate("");
        setTime("");
        setUser("");
    };

    return (
        <div className='appoint'>
            <form onSubmit={handleFormSubmit} className='appointform'>
                <input
                    type="date"
                    value={date}
                    onChange={e => { setDate(e.target.value) }}
                />
                <input
                    type="time"
                    value={time}
                    onChange={e => { setTime(e.target.value) }}
                />
                {/* <DateTimePicker className="dtp" style={{ width: "200px" }}
                    value={time}
                    onChange={setTime}
                    minDate={new Date()}
                    minutePlaceholder='mm'
                    hourPlaceholder='hh'
                    dayPlaceholder='DD'
                    monthPlaceholder='MM'
                    yearPlaceholder='YYYY'
                /> */}
                <input
                    type="text"
                    placeholder="User"
                    value={user}
                    onChange={e => { setUser(e.target.value) }}
                />
                <button type="submit">Book Appointment</button>
            </form>
        </div>
    );
};

export default Appointment;
