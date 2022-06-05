import React from 'react';
import Footer from '../Shared/Footer';
import About from './About';
import Advantage from './Advantage';
import Banner from './Banner';
import Feature from './Feature';

const Home = () => {
    return (
        <>
            <Banner />
            <Advantage />
            <About />
            <Feature />
            <Footer />
        </>
    );
};

export default Home;