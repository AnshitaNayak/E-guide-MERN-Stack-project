import React, { useState } from 'react';

const Message = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [number, setnum] = useState('');
    const [subject, setsub] = useState('');

    const reviewform = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                number,
                subject
            })
        })

        const data = await response.json();
        console.log(data);
        if (data.status === 'ok') {
            window.location.href = '/';
        }
    }

    return (
        <>
            <form onSubmit={reviewform} className='form-details'>
                <input
                    value={name}
                    type="text"
                    placeholder='Enter Full Name'
                    onChange={e => { setname(e.target.value) }}
                />
                <br />
                <input
                    value={email}
                    type="email"
                    placeholder='Email Address'
                    onChange={e => { setemail(e.target.value) }}
                />
                <br />
                <input
                    value={number}
                    type="number"
                    placeholder='Phone Number'
                    onChange={e => { setnum(e.target.value) }}
                />
                <br />
                <input
                    value={subject}
                    type="text"
                    placeholder='Write your message here'
                    onChange={e => { setsub(e.target.value) }}
                />
                <br />
                <button type="submit" className='submit-btn'>SUBMIT REQUEST</button>
            </form>
        </>
    );
}

export default Message;