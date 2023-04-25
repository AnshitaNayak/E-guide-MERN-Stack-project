import React from 'react';
import MyAccordion1 from './MyAccordion1';
import {HeartApi1} from './HeartApi1';

const Accordion1 = () =>{
       
    return(
        <>
        <div>
            <div className='accordion'>
                {
                    HeartApi1.map(({question,answer}) =>(
                        <MyAccordion1 question={question} answer={answer}/>
                    ))}
            </div>
        </div>
        </>
    )
}

export default Accordion1;