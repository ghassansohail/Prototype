import React, {Component} from "react";
import {Button } from 'react-bootstrap';
import vid from './video-1.mp4';
import {Link} from 'react-router-dom'

import './HeroSection.css'

 function Hero(){
     return (        
         <>
         <div className="hero-container">
        <video src={vid} autoPlay loop muted/>        
        <h1>Adventure Awaits.</h1>        
        <h3>What are you waiting for?</h3>
        <br/>
        <Link to="/login">
        <Button size="lg" variant="outline-light">Let's Go</Button>        
        </Link>
        </div>
        </>


     )


}

export default Hero;