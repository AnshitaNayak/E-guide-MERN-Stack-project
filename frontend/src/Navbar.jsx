import React from 'react';
import './index.css';

const Navbar = () =>{
    return(
        <>
        <div className='logo-sitename'>
            <img src = "./images/cropimg.jpg" alt="my_pic"/>
            <p>BeingHealthy</p>
        </div>
        <div className='rem-navbar'>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        </>
    );
};

export default Navbar;