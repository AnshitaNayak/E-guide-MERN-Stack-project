import React from 'react';
import MyAccordion3 from './MyAccordion3';
import {BrainApi1} from './BrainApi1';

const Accordion3 = () =>{
       
    return(
        <>
        <div>
            <div className='accordion'>
                {
                    BrainApi1.map(({question,answer}) =>(
                        <MyAccordion3 question={question} answer={answer}/>
                    ))}
            </div>
        </div>
        </>
    )
}

export default Accordion3;