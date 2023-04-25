import React, { useState } from 'react';
import { useLocation, Redirect } from 'react-router-dom';
import Carousel from 'react-elastic-carousel';
import Navbar_temp from './Navbar_temp';
import { Switch, Route } from "react-router-dom";
import Card from './Card';
import ItemsApi from './ItemsApi';
import './index.css';
import AboutCard from './AboutCard';
import ContactUs from './ContactUs';
import Service from './Service';
import Appointment from './Appointment';
import Register from './Register';
import Login from './Login';
import HeartD from './HeartD';
import EyesD from './EyesD';
import BrainD from './BrainD';
import Footer from './Footer';

const Home = (locals) => {
    const [src, setSrc] = useState(ItemsApi);
    return (
        <>
            <div className='navbar'><Navbar_temp /></div>
            <div className='home-page-info'>
                <Carousel className='first-Carousel'>
                    <Card src={src} ind={0}></Card>
                    <Card src={src} ind={1}></Card>
                </Carousel>
            </div>
            <div className='footer'><Footer /></div>
        </>
    );
};

const About = () => {
    return (
        <>
            <div className='navbar'><Navbar_temp /></div>
            <AboutCard />
            <div className='footer'><Footer /></div>
        </>
    );
};

const Services = () => {
    return (
        <>
            <div className='navbar'><Navbar_temp /></div>
            <Service />
            <div className='footer'><Footer /></div>
        </>
    );
};

const Contact = () => {
    return (
        <>
            <div className='navbar'><Navbar_temp /></div>
            <p><ContactUs /> </p>
            <div className='footer'><Footer /></div>
        </>
    );
};

const Appoint = () => {
    return (
        <>
            <div className='navbar'><Navbar_temp /></div>
            <p><Appointment /> </p>
            <div className='footer'><Footer /></div>
        </>
    );
};

const Registerbt = () => {
    return (
        <>
            <p><Register /> </p>
        </>
    );
}

const Loginstr = () => {
    return (
        <>
            <p><Login /> </p>
        </>
    );
}

const App = (locals) => {
    console.log(locals.islogin);
    const location = useLocation();
    return (
        <>
            <div className='whole'>
                <div className='main'>
                    <Switch>

                        <Route exact path="/">
                            <Loginstr />
                        </Route>

                        <Route exact path="/home">
                            <Home />
                        </Route>

                        <Route path="/about">
                            <About />
                        </Route>

                        <Route path="/services">
                            <Services />
                        </Route>

                        <Route path="/contact">
                            <Contact />
                        </Route>

                        <Route path="/appointments">
                            <Appoint />
                        </Route>

                        <Route path="/register">
                            <Registerbt />
                        </Route>

                        <Route path="/logout">
                            <Loginstr />
                        </Route>

                        <Route path="/heart">
                            <HeartD />
                        </Route>

                        <Route path="/brain">
                            <BrainD />
                        </Route>

                        <Route path="/eyes">
                            <EyesD />
                        </Route>
                    </Switch>
                </div>
            </div>
        </>
    )
}

export default App;