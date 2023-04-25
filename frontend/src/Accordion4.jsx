import React from 'react';
import MyAccordion4 from './MyAccordion4';
import {BrainApi2} from './BrainApi2';

const Accordion4 = () =>{
       
    return(
        <>
        <div>
            <div className='accordion'>
                {
                    BrainApi2.map(({question,answer}) =>(
                        <MyAccordion4 question={question} answer={answer}/>
                    ))}
            </div>
        </div>
        </>
    )
}

export default Accordion4;