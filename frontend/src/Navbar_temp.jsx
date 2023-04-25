import React from 'react';
import './index.css';
import { NavLink } from "react-router-dom";

const Navbar_temp = () => {
    return (
        <>
            <div className='logo-sitename'>
                <img src="./images/logoimg.png" alt="my_pic" />
                <p><u>BeingHealthy</u></p>
            </div>
            <div className='rem-navbar'>
                <div className='mainbtns'>
                    <ul>
                        <li>
                            <NavLink to="/home">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink to="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className='formbtns'>
                    <ul>
                        <li>
                            <NavLink to="/appointments">Appointment</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Logout</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Navbar_temp;

