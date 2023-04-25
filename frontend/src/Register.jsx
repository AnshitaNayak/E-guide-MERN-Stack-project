import React, { useState } from 'react';

const Register = () => {

    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');

    const registerform = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                pass
            })
        })

        const data = await response.json();
        if (data.status === 'ok') {
            window.location.href = '/login';
        }
    }

    const url = "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoY2FyZSUyMHdpdGglMjByZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

    return (
        <div className='registerform'>
            <div className='left' style={{ backgroundImage: `url(${url})` }}>
                <div className='parag'>
                    <p>Good Health & Good Sense</p>
                    <p>are two of life's greatest blessings.</p>
                </div>
            </div>
            <div className='right'>
                <h2>Create an account</h2>
                <div className='registerdetails'>
                    <form onSubmit={registerform} className='registerformdeep'>
                        <input
                            value={name}
                            type="text"
                            placeholder='Name'
                            onChange={e => { setname(e.target.value) }}
                        />
                        <br />
                        <input
                            value={email}
                            type="email"
                            placeholder='Email'
                            onChange={e => { setemail(e.target.value) }}
                        />
                        <br />
                        <input
                            value={pass}
                            type="password"
                            placeholder='Password'
                            onChange={e => { setpass(e.target.value) }}
                        />
                        <br />
                        <button type="submit">Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;