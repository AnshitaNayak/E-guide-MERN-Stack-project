import React from 'react';
import './index.css';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PsychologyIcon from '@mui/icons-material/Psychology';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {Link } from "react-router-dom";

const Service = () =>{
    const url = "https://hope.jamstacktemplates.dev/img/slider/main-slide-01.jpg";
    return(
        <>
            <div className='services'>
                <div className='service-img' style={{backgroundImage: `url(${url})`}}>
                    <div className='service-para'>
                        <h1>Best solution for your health</h1>
                        <h2>Services That</h2>
                        <h2>We Provide</h2>
                    </div>
                </div>
                <div className='services-info'>
                    <h1>Our Services</h1>
                    <span>
                        <p>Best Solution </p>
                        <p> For Your Health</p>
                    </span>
                    <div className='services-cards'>
                        <div className='card-1'>
                            <h1><FavoriteBorderIcon style={{fontSize:70, color:"darkred"}}/></h1>
                            <h2>Cardiology</h2>
                            <p>Cardiologists diagnose, assess and treat patients with defects and diseases of the heart and the blood vessels, which are known as the cardiovascular system.</p>
                            <button>
                                <Link to="/heart">More <ArrowForwardIosIcon style={{marginLeft:"0.5em", fontSize:"0.9em"}}/></Link>
                            </button>
                        </div>
                        <div className='card-1'>
                            <h1><PsychologyIcon style={{fontSize:70, color:"darkred"}}/></h1>
                            <h2>Psychiatry</h2>
                            <p>Psychiatry is the branch of medicine focused on the diagnosis, treatment and prevention of mental, emotional and behavioral disorders.</p>
                            <button>
                                <Link to="/brain">More <ArrowForwardIosIcon style={{marginLeft:"0.5em", fontSize:"0.9em"}}/></Link>
                            </button>
                        </div>
                        <div className='card-1'>
                            <h1><VisibilityIcon style={{fontSize:70, color:"darkred"}}/></h1>
                            <h2>Opthalmology</h2>
                            <p>Ophthalmologists are doctors who care for patients with eye conditions. They diagnose, treat and prevent disorders of the eyes and visual system, using medical and surgical skills.</p>
                            <button>
                                <Link to="/eyes">More <ArrowForwardIosIcon style={{marginLeft:"0.5em", fontSize:"0.9em"}}/></Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service;