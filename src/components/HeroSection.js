import React, {Component} from "react";
import {Button } from 'react-bootstrap';
import vid from './video-1.mp4';
import './HeroSection.css'

 function Hero(){
     return (        
         <>
         <div className="hero-container">
        <video src={vid} autoPlay loop muted/>        
        <h1>Adventure Awaits.</h1>        
        <h3>What are you waiting for?</h3>
        <br/>
        <Button size="lg" variant="outline-light">Let's Go</Button>
        </div>
        
        </>


     )


}

export default Hero;