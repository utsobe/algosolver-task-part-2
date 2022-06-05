import React from 'react';
import { BeakerIcon, ClockIcon, CodeIcon, DesktopComputerIcon } from '@heroicons/react/solid'

const Advantage = () => {
    return (
        <div className='bg-neutral'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto lg:px-12 py-4'>
                <div className='flex justify-center p-5'>
                    <CodeIcon className='h-12 w-12 text-primary mr-3 mt-2' />
                    <div>
                        <h2 className='text-2xl mb-2'>Access to source code</h2>
                        <p className='text-slate-500'>There is now an abundance of readable dummy texts.</p>
                    </div>
                </div>
                <div className='flex justify-center p-5'>
                    <DesktopComputerIcon className='h-12 w-12 text-primary mr-3 mt-2' />
                    <div>
                        <h2 className='text-2xl mb-2'>Bootstrap framework</h2>
                        <p className='text-slate-500'>There is now an abundance of readable dummy texts.</p>
                    </div>
                </div>
                <div className='flex justify-center p-5'>
                    <ClockIcon className='h-12 w-12 text-primary mr-3 mt-2' />
                    <div>
                        <h2 className='text-2xl mb-2'>24/7 Supports</h2>
                        <p className='text-slate-500'>There is now an abundance of readable dummy texts.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advantage;