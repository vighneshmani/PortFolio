import React from 'react';
import { Button } from './Button';
import './HeroSection.css';
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
            <video 
            src="/videos/video-3.mp4" 
            autoPlay loop muted 
            />
            <h1>VIGHNESH MANI</h1>
            <p>ASPIRING SOFTWARE DEVELOPER</p>
            <br></br>
            <div className = "hero-btns">
                <Button 
                className='btns'
                buttonStyle='btn--outline'
                buttonSize = 'btn--large'
                >
                RESUME
                </Button>
            </div>           
        </div>
    )
}

export default HeroSection;