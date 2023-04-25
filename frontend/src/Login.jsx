import React, { useState } from 'react';

const Login = ({ url }) => {

    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');

    const loginform = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                pass
            })
        })

        const data = await response.json();
        if (data.user) {
            localStorage.setItem('token', data.user);
            alert('Login successfully!!');
            console.log(url);
            window.location.href = '/home';
        } else {
            alert('Plezzz check your username and password');
        }
    }

    const url1 = "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aGVhbHRoY2FyZSUyMHdpdGglMjByZWR8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60";

    return (
        <div className='registerform'>
            <div className='left' style={{ backgroundImage: `url(${url1})` }}>
                <div className='parag'>
                    <p>Good Health & Good Sense</p>
                    <p>are two of life's greatest blessings.</p>
                </div>
            </div>
            <div className='right'>
                <h2>Login to Continue</h2>
                <div className='registerdetails'>
                    <form onSubmit={loginform} className='registerformdeep'>
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
                        <button type="submit">Login</button>
                    </form>
                    <div className='remform'>
                        <p>or not having account ?</p>
                        <a href="/register">Register</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;