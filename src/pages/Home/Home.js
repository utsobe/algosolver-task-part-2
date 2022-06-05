import React from 'react';
import Footer from '../Shared/Footer';
import About from './About';
import Advantage from './Advantage';
import Banner from './Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <Advantage />
            <About />
            <Footer />
        </>
    );
};

export default Home;