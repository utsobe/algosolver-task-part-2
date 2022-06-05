import { ChartBarIcon, ChevronRightIcon, ClockIcon, CollectionIcon, ColorSwatchIcon, DesktopComputerIcon, TrendingUpIcon } from '@heroicons/react/solid';
import React from 'react';

const Feature = () => {
    return (
        <div className='max-w-7xl mx-auto px-4 lg:px-16 mb-24'>
            <h2 className='text-4xl text-center font-semibold'>Our Features</h2>
            <p className='text-slate-500 mx-auto text-center max-w-xl mt-3 mb-12'>There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 '>
                <div className='shadow-md hover:shadow-2xl rounded-md px-6 py-12'>
                    <DesktopComputerIcon className='h-12 w-12 text-primary' />
                    <h2 className='text-2xl font-semibold my-6'>Fully Responsive</h2>
                    <p className='text-slate-500 mb-6'>It is a long established fact that a reader will be distracted by the when looking at its layout.</p>
                    <p className='text-primary '>Read More<ChevronRightIcon className='h-5 w-5 inline-block' /> </p>
                </div>
                <div className='shadow-md hover:shadow-2xl rounded-md px-6 py-12'>
                    <CollectionIcon className='h-12 w-12 text-primary' />
                    <h2 className='text-2xl font-semibold my-6'>Fresh Layouts</h2>
                    <p className='text-slate-500 mb-6'>It is a long established fact that a reader will be distracted by the when looking at its layout.</p>
                    <p className='text-primary '>Read More<ChevronRightIcon className='h-5 w-5 inline-block' /> </p>
                </div>
                <div className='shadow-md hover:shadow-2xl rounded-md px-6 py-12'>
                    <ChartBarIcon className='h-12 w-12 text-primary' />
                    <h2 className='text-2xl font-semibold my-6'>Minimalism Feast</h2>
                    <p className='text-slate-500 mb-6'>It is a long established fact that a reader will be distracted by the when looking at its layout.</p>
                    <p className='text-primary '>Read More<ChevronRightIcon className='h-5 w-5 inline-block' /> </p>
                </div>
                <div className='shadow-md hover:shadow-2xl rounded-md px-6 py-12'>
                    <TrendingUpIcon className='h-12 w-12 text-primary' />
                    <h2 className='text-2xl font-semibold my-6'>Modern Workflow</h2>
                    <p className='text-slate-500 mb-6'>It is a long established fact that a reader will be distracted by the when looking at its layout.</p>
                    <p className='text-primary '>Read More<ChevronRightIcon className='h-5 w-5 inline-block' /> </p>
                </div>
                <div className='shadow-md hover:shadow-2xl rounded-md px-6 py-12'>
                    <ColorSwatchIcon className='h-12 w-12 text-primary' />
                    <h2 className='text-2xl font-semibold my-6'>Unique Features</h2>
                    <p className='text-slate-500 mb-6'>It is a long established fact that a reader will be distracted by the when looking at its layout.</p>
                    <p className='text-primary '>Read More<ChevronRightIcon className='h-5 w-5 inline-block' /> </p>
                </div>
                <div className='shadow-md hover:shadow-2xl rounded-md px-6 py-12'>
                    <ClockIcon className='h-12 w-12 text-primary' />
                    <h2 className='text-2xl font-semibold my-6'>Support 24/7</h2>
                    <p className='text-slate-500 mb-6'>It is a long established fact that a reader will be distracted by the when looking at its layout.</p>
                    <p className='text-primary '>Read More<ChevronRightIcon className='h-5 w-5 inline-block' /> </p>
                </div>
            </div>
        </div>
    );
};

export default Feature;