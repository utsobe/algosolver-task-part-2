import React from 'react';
import Banner1 from '../../assets/banner-img/bnr-img.svg';
const Banner = () => {
    return (
        <>
            <div class="carousel w-full min-h-screen">
                <div id="slide1" class="carousel-item relative w-full">
                    <div className='max-w-7xl mx-auto lg:px-14'>
                        <div class="hero min-h-full">
                            <div class="hero-content flex-col lg:flex-row-reverse gap-y-10">
                                <img src={Banner1} class="w-full lg:max-w-md" alt='' />
                                <div>
                                    <h1 class="text-5xl font-semibold">It's Bootstrap Template</h1>
                                    <p class="py-6 text-slate-400	">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
                                    <button class="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" class="btn btn-circle">❮</a>
                        <a href="#slide2" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" class="carousel-item relative w-full">
                    <div className='max-w-7xl mx-auto lg:px-12'>
                        <div class="hero min-h-full">
                            <div class="hero-content flex-col lg:flex-row-reverse">
                                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt='' />
                                <div>
                                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                    <button class="btn btn-primary">Get Started</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" class="btn btn-circle">❮</a>
                        <a href="#slide3" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" class="carousel-item relative w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6" alt='' class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" class="btn btn-circle">❮</a>
                        <a href="#slide4" class="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" class="carousel-item relative w-full">
                    <img src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693" alt='' class="w-full" />
                    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" class="btn btn-circle">❮</a>
                        <a href="#slide1" class="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;