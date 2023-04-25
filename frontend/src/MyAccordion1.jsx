import React,{useState} from 'react';

const MyAccordion1 = ({question,answer}) =>{
    const[isActive,setIsActive] = useState(false);
    return(
        <>
        <div className='accordion-item'>
            <div className='accordion-title' onClick={() =>setIsActive(!isActive)}>
                <div className='q-i'>
                    <div className='accordion-title-q'>{question}</div>
                    <div className='accordion-title-i'>{isActive ? '-' : '+'}</div>
                </div>
                {isActive && <div className='accordion-answer'>{answer}</div>}
            </div>
        </div>
        </>
    )
}

export default MyAccordion1;