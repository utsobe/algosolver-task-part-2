import { CubeTransparentIcon, DeviceMobileIcon, DownloadIcon, PlayIcon, SupportIcon } from '@heroicons/react/solid';
import React from 'react';
import Img1 from '../../assets/about-img/img-1.jpg';
import Img2 from '../../assets/about-img/img-2.jpg';
import Img3 from '../../assets/about-img/img-3.jpg';

const About = () => {
    return (
        <div className='my-24'>
            <div className='lg:flex sm:flex-1 items-center gap-12 max-w-7xl mx-auto px-4 lg:px-16'>
                <div className='flex items-center max-w-screen-sm h-screen-xs justify-center gap-4 lg:gap-8'>
                    <div>
                        <img src={Img2} className='rounded-2xl' alt="" />
                    </div>
                    <div className=''>
                        <img className='rounded-2xl' src={Img1} alt="" />
                        <img className='rounded-2xl mt-4 lg:mt-8' src={Img3} alt="" />
                    </div>
                </div>
                <div>
                    <h3 className='text-2xl text-primary mb-2'>About Us</h3>
                    <h2 className='text-4xl font-semibold'>Our mission is to
                        make your life easier.</h2>
                    <p className='text-slate-500 py-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit quod debitis praesentium pariatur temporibus ipsa, cum quidem obcaecati sunt?</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-7'>
                        <div className='flex items-center gap-2 p-3 border rounded-md'>
                            <DeviceMobileIcon className='h-7 w-7 text-primary ' />
                            <p className='text-xl'>Responsive</p>
                        </div>
                        <div className='flex items-center gap-2 p-3 border rounded-md'>
                            <DownloadIcon className='h-7 w-7 text-primary ' />
                            <p className='text-xl'>Free Download</p>
                        </div>
                        <div className='flex items-center gap-2 p-3 border rounded-md'>
                            <SupportIcon className='h-7 w-7 text-primary ' />
                            <p className='text-xl'>Support</p>
                        </div>
                        <div className='flex items-center gap-2 p-3 border rounded-md'>
                            <CubeTransparentIcon className='h-7 w-7 text-primary ' />
                            <p className='text-xl'>Development</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-2 mt-8'>
                        <PlayIcon className='h-12 w-12 text-primary ' />
                        <p className='font-semibold'>Watch Now</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;