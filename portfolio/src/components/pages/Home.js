import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ProjectCards from '../Cards';
import Experiences from '../Experiences';
import Music from '../Music';

function Home() {
    return (
        <>
            <HeroSection />
            <ProjectCards/>
            <Experiences/>
            <Music/>
            <Footer />

        </>
    )
}


export default Home;