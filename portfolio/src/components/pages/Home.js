import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import ProjectCards from '../Cards';


function Home() {
    return (
        <>
            <HeroSection />
            <ProjectCards/>
            <Footer />

        </>
    )
}


export default Home;