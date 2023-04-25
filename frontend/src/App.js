import React,{useState}from 'react';
import Carousel from 'react-elastic-carousel';
import styled from "styled-components";
import Navbar from './Navbar';
import Card from './Card';
import Items from './Items';
import './index.css';

const App = () =>{

    const[src,setSrc] = useState(Items);

    return(
    <>
      <div className='whole'>
        <div className='navbar'><Navbar/></div>
        <div className='main'>
          <Carousel>
            <Card  src={src} ind={0}/>
            <Card  src={src} ind={1}/>
          </Carousel>
        </div>
      </div>
    </>
  )
}

export default App;