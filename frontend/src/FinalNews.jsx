import React,{useState}from 'react';
import Carousel from 'react-grid-carousel';
import CardNews from './CardNews';
import NewsApi from './NewsApi';
import './index.css';

const FinalNews = () =>{
    const[cardsrc,setCardSrc] = useState(NewsApi);
    return(
        <>
            <Carousel cols={2} rows={1} gap={5} loop className='carousel-icon'>
                <Carousel.Item>
                    <CardNews cardsrc={cardsrc} ind={0}/>
                </Carousel.Item>
                <Carousel.Item>
                    <CardNews cardsrc={cardsrc} ind={1}/>
                </Carousel.Item>
                <Carousel.Item>
                    <CardNews cardsrc={cardsrc} ind={2}/>
                </Carousel.Item>
                <Carousel.Item>
                    <CardNews cardsrc={cardsrc} ind={3}/>
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default FinalNews;