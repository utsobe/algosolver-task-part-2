import React from 'react';
import Img1 from '../../assets/about-img/img-1.jpg';
import Img2 from '../../assets/about-img/img-2.jpg';
import Img3 from '../../assets/about-img/img-3.jpg';

const About = () => {
    return (
        <div className='my-24'>
            <div className='flex fle gap-12 max-w-7xl mx-auto lg:px-16'>
                <div className='flex items-center max-w-screen-sm max-h-screen-xs justify-center gap-12'>
                    <div>
                        <img src={Img2} className='rounded-2xl' alt="" />
                    </div>
                    <div className=''>
                        <img className='rounded-2xl' src={Img1} alt="" />
                        <img className='rounded-2xl mt-8' src={Img3} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl text-primary'>About Us</h3>
                    <h2 className='text-4xl'>Our mission is to
                        make your life easier.</h2>
                </div>
            </div>
        </div>
    );
};

export default About;