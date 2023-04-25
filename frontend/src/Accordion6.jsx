import React from 'react';
import MyAccordion6 from './MyAccordion6';
import {EyeApi2} from './EyeApi2';

const Accordion6 = () =>{
       
    return(
        <>
        <div>
            <div className='accordion'>
                {
                    EyeApi2.map(({question,answer}) =>(
                        <MyAccordion6 question={question} answer={answer}/>
                    ))}
            </div>
        </div>
        </>
    )
}

export default Accordion6;