import React from 'react';
import MyAccordion5 from './MyAccordion5';
import {EyeApi1} from './EyeApi1';

const Accordion5 = () =>{
       
    return(
        <>
        <div>
            <div className='accordion'>
                {
                    EyeApi1.map(({question,answer}) =>(
                        <MyAccordion5 question={question} answer={answer}/>
                    ))}
            </div>
        </div>
        </>
    )
}

export default Accordion5;