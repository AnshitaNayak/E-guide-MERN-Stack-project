import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer-icon'>
                    <p>&copy; Website </p>
                    <p> 2023 </p>
                    <p>| All Rights Reserved</p>
                </div>
                <div className='footer-owner'>
                    <p>Built By</p>
                    <p><a href="https://www.linkedin.com/in/anshita-nayak-071762205/">Anshita Nayak & Rashmi Jha</a></p>
                </div>
                <div className='footer-links'>
                    <p><Link to="/">Home  |</Link></p>
                    <p><Link to="/about">About  |</Link></p>
                    <p><Link to="/services">Services  |</Link></p>
                    <p><Link to="/contact">Contact  |</Link></p>
                </div>
            </div>
        </>
    )
}

export default Footer;