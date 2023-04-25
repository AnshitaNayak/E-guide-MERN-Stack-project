import React from 'react';
import CheckCircleTwoToneIcon from '@mui/icons-material/CheckCircleTwoTone';

const AboutCard = () =>{

    const url = "https://hope.jamstacktemplates.dev/img/slider/slide2.jpg";

    return(
        <>
            <div className='about-card'>
                <div className='about-img' style={{backgroundImage: `url(${url})`}}>
                <div className='about-para'>
                    <h1>About</h1>
                    <h2>BeingHealthy</h2>
                </div>
                </div>
                <div className='about-info'>
                    <div className='about-info-details'>
                        <h2>Work Process</h2>
                        <h1>How it Works ?</h1>
                        <p>We give complete Medication Guides by providing information on proper drug use, safety, and storage. The guides address issues that are specific to particular drugs and drug classes, and they contain FDA-approved information that can help patients avoid serious adverse events.</p>
                        <div className='about-info-lists'>
                            <ul>
                                <li><CheckCircleTwoToneIcon style={{ fill:'#8F1B1B',marginRight:'0.5em' , fontWeight:'bolder', fontSize:'1.2em'}}/>List Symptoms</li>
                                <li><CheckCircleTwoToneIcon style={{ fill: '#8F1B1B',marginRight:'0.5em' , fontWeight:'bolder', fontSize:'1.2em'}}/> Confirm Disease</li>
                                <li><CheckCircleTwoToneIcon style={{ fill: '#8F1B1B',marginRight:'0.5em' , fontWeight:'bolder', fontSize:'1.2em'}}/> Get Medication</li>
                                <li><CheckCircleTwoToneIcon style={{ fill: '#8F1B1B',marginRight:'0.5em' , fontWeight:'bolder', fontSize:'1.2em'}}/> Leave Feedback</li>
                            </ul>
                        </div>
                    </div>
                    <div className='about-info-img'>
                        <img src="https://technext.github.io/dentcare/img/about.jpg" alt="my_pic"/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default AboutCard;