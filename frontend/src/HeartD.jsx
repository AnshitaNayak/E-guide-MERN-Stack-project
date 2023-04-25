import React from 'react';
import Navbar_temp from './Navbar_temp';
import Accordion1 from './Accordion1';
import Accordion2 from './Accordion2';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const HeartD = () =>{
    return(
        <>
         <div className='navbar'><Navbar_temp/></div>
         <div className='services-cardiology'>
            <div className='cardiology'>
                <div className='cardiology-info-img'>
                    <h1><FavoriteBorderIcon style={{fontSize:70, color:"darkred", marginRight:"0.3em"}}/> Cardiology</h1>
                    <div className='cardiology-info'>
                        <p>Cardiology is a medical specialty and a branch of internal medicine concerned with disorders of the heart. It deals with the diagnosis and treatment of such conditions as congenital heart defects, coronary artery disease, electrophysiology, heart failure and valvular heart disease. Subspecialties of the cardiology field include cardiac electrophysiology, echocardiography, interventional cardiology and nuclear cardiology.Cardiac surgeons are the specialist physicians who perform surgical procedures to correct heart disorders.If you notice a pattern of heart disease, including high cholesterol and high blood pressure, take action and get checked by a cardiologist.</p>
                    </div>
                </div>
                <div className='cardiology-img'>
                    <img src="https://chblob.icloudhospital.com/imagecontainer/1-cardiology-5cfe9c63-ff89-4b0c-bf71-d589163e095f.jpg" alt="heart-pic"></img>
                </div>
            </div>
            <h1 className='heart-diseases'>
                <p>Heart Disease : </p> 
                <p>Causes & Symptoms</p>
            </h1>
            <div className='disease'>
                <div className='disease-info'>
                    <div className='acc-1'>
                        <Accordion1/>
                        <img src="https://businessmirror.com.ph/wp-content/uploads/2020/02/hf03-020620.jpg" alt="pic"></img>
                    </div>
                    <div className='acc-1'>
                        <Accordion2/>
                        <img src="https://drraghu.com/wp-content/uploads/2022/07/Cong.-Heart-Disease.jpg" alt="pic"></img>
                    </div>
                </div>
            </div>
         </div>
        </>
    )
}

export default HeartD;