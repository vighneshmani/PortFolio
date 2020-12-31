import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ProjectCards from '../Cards';
import Experiences from '../Experiences';

function Home() {
    return (
        <>
            <HeroSection />
            <ProjectCards/>
            <Experiences/>
            <Footer />

        </>
    )
}


export default Home;