import React from 'react';
import './index.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const CardNews = ({cardsrc,ind}) =>{
    return(
        <>
            {cardsrc.map((currEle,index)=>{
            if(ind===index){
            const{id,title,url,src,description} = currEle;
            return(
                <>
                <div className = 'news' key={id}>
                    <div className='card-data'>
                        <img src = {`${src}`}/>
                        <h1>{title}</h1>
                        <p>{description}</p>
                        <a href = {`${url}`}>Read More<ArrowForwardIcon/></a>
                    </div>
                </div>
                </>
            )}
            })
            }
        </>
    )
}

export default CardNews;