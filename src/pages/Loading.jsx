import React from 'react';
import { BarLoader } from 'react-spinners';

const Loading = () => {
    return (
    <div className='flex justify-center items-center w-full min-h-screen'>
            <div className='text-center space-y-5'>
                <BarLoader
            color='#632EE3'/>
            <h1 className='text-xl font-bold text-[#632EE3]'>Loading</h1>
            </div>
        </div>
    );
};

export default Loading;