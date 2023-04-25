import React from 'react';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Message from './Message';
import './index.css';

const ContactUs = () => {

    const url = "https://hope.jamstacktemplates.dev/img/slider/slide1.jpg";
    return (
        <>
            <div className='contact-us'>
                <div className='contact-img' style={{ backgroundImage: `url(${url})` }}>
                    <div className='contact-para'>
                        <h1>Contact Us</h1>
                        <h2>Home / Contact</h2>
                    </div>
                </div>
                <div className='contact-info'>
                    <div className='call-info'>
                        <span className='call-details'>
                            <h1><span className='callicon'><CallIcon style={{ color: "white", fontSize: 40, backgroundColor: "#8F1B1B", border: "1px solid none", padding: "0.4em 0.3em", borderRadius: "0.2em", marginRight: "0.4em", marginBottom: "0em", marginTop: "1em" }} /></span>  Our Phone
                            </h1>
                            <p>Telephone: 0029129102320</p>
                            <p>Mobile: 000 2324 39493</p>
                        </span>
                    </div>
                    <div className='email-info'>
                        <span className='email-details'>
                            <h1><span className='emailicon'><EmailIcon style={{ color: "white", fontSize: 40, backgroundColor: "#8F1B1B", border: "1px solid none", padding: "0.3em 0.3em", borderRadius: "0.2em", marginRight: "0.4em", marginBottom: "0em", marginTop: "1em" }} /></span>  Our Email</h1>
                            <p>Main Email: example@example.com</p>
                            <p>Inquiries: example@example.com</p>
                        </span>
                    </div>
                </div>
                <div className='form'>
                    <h1>Call to Action</h1>
                    <h2>Make a Request</h2>
                    <Message />
                </div>
            </div>
        </>
    )
}

export default ContactUs;