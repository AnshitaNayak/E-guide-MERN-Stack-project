import React from 'react';
import Navbar_temp from './Navbar_temp';
import Accordion3 from './Accordion3';
import Accordion4 from './Accordion4';
import PsychologyIcon from '@mui/icons-material/Psychology';

const BrainD = () =>{
    return(
        <>
         <div className='navbar'><Navbar_temp/></div>
         <div className='services-cardiology'>
            <div className='cardiology'>
                <div className='cardiology-info-img'>
                    <h1><PsychologyIcon style={{fontSize:70, color:"darkred", marginRight:"0.3em"}}/> Psychiatry</h1>
                    <div className='cardiology-info'>
                        <p>Psychiatry is an area of medicine involving the study, diagnosis and treatment of mental health disorders. A person's mental health is influenced by a combination of factors that are both specific to an individual as well as related to interactions with society, community, and family. There are several components to mental well being including a healthy self esteem, communication skills and the development of resilience.A psychiatrist is a physician who deals with the diagnosis, treatment, management and prevention of mental health and emotional problems. The psychiatrist completes four years of mandatory medical school training before specializing in the field of psychiatry.</p>
                    </div>
                </div>
                <div className='cardiology-img'>
                    <img src="https://s3-us-west-2.amazonaws.com/courses-images-archive-read-only/wp-content/uploads/sites/902/2015/02/23224600/CNX_Psych_03_04_Lobes.jpg" alt="heart-pic"></img>
                </div>
            </div>
            <h1 className='heart-diseases'>
                <p>Brain Disease : </p> 
                <p>Causes & Symptoms</p>
            </h1>
            <div className='disease'>
                <div className='disease-info'>
                    <div className='acc-1'>
                        <Accordion3/>
                        <img src="https://www.mayoclinic.org/-/media/kcms/gbs/patient-consumer/images/2014/10/30/15/17/mcdc7_brain_cancer-8col.jpg"></img>                    
                    </div>
                    <div className='acc-1'>
                        <Accordion4/>
                        <img src="https://www.healthc.in/blog/wp-content/uploads/2019/05/Alzheimers-Brain.jpg"></img>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default BrainD;