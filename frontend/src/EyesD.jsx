import React from 'react';
import Navbar_temp from './Navbar_temp';
import Accordion5 from './Accordion5';
import Accordion6 from './Accordion6';
import VisibilityIcon from '@mui/icons-material/Visibility';

const EyesD = () =>{
    return(
        <>
         <div className='navbar'><Navbar_temp/></div>
         <div className='services-cardiology'>
            <div className='cardiology'>
                <div className='cardiology-info-img'>
                    <h1><VisibilityIcon style={{fontSize:70, color:"darkred", marginRight:"0.3em"}}/> Opthalmology</h1>
                    <div className='cardiology-info'>
                        <p>Ophthalmology is the specialized field of medicine that focuses on the health of the eye. It includes the anatomy, physiology and diseases that may affect the eye. Historically, the science of ophthalmology encompassed all aspects of visual function, both in health and in illness. Additionally, ophthalmology also includes animal eyes as ocular function and optic diseases are similar among humans and animals.An ophthalmologist is a specialist physician who is involved with the prevention, diagnosis and medical treatment of the eyes. This may include surgical procedures and pharmaceutical interventions and, as such, ophthalmologists have training in both fields.</p>   
                    </div>
                </div>
                <div className='cardiology-img'>
                    <img src="https://eremedium.in/wp-content/uploads/2022/05/15-Ophthalmology.jpg"></img>
                </div>
            </div>
            <h1 className='heart-diseases'>
                <p>Eye Disease : </p> 
                <p>Causes & Symptoms</p>
            </h1>
            <div className='disease'>
                <div className='disease-info'>
                    <div className='acc-1'>
                        <Accordion5/>
                        <img src="https://www.verywellhealth.com/thmb/_KtV5Molzk5voaJICgw7tIjyGbA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-875307146-5c73186bc9e77c00016bfddc.jpg"></img>
                        </div>
                    <div className='acc-1'>
                        <Accordion6/>
                        <img src="https://www.lei.org.au/wp-content/uploads/2021/08/Amblyopia-Lazy-Eye.jpg"></img>            
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default EyesD;