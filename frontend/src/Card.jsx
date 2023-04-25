import React,{useState} from 'react';
import FinalNews from './FinalNews';
import './index.css';
import AddIcon from '@mui/icons-material/Add';
import CardNews from './CardNews';

const Card = ({src,ind}) =>{

    const[state,setState] = useState(false);
    return(
        <>
        {src.map((currEle,index) =>{
            if(ind===index){
            const{id,url,p1,p2} = currEle;
            return(
                <>
                <div className = 'home' key={id}>
                    <div className='img' style={{backgroundImage: `url(${url})`}}>
                    <div className='para'>
                        <p>{p1}</p>
                        <p>{p2}</p>
                        <div className='read-more'>
                            <button onClick={() => setState(true)}>Read More <AddIcon style={{color:"black",fontWeight:"bold"}}/></button>
                        </div>
                    </div>
                    </div>
                    {state && <FinalNews/>}
                </div>
                </>
            )}
            })}
        </>
    )
}

export default Card;