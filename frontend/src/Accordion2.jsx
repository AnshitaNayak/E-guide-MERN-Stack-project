import React from 'react';
import MyAccordion2 from './MyAccordion2';
import {HeartApi2} from './HeartApi2';

const Accordion2 = () =>{
       
    return(
        <>
        <div>
            <div className='accordion'>
                {
                    HeartApi2.map(({question,answer}) =>(
                        <MyAccordion2 question={question} answer={answer}/>
                    ))}
            </div>
        </div>
        </>
    )
}

export default Accordion2;