import React from 'react';
import { BarLoader } from 'react-spinners';

const Loading = () => {
    return (
    <div className='flex justify-center items-center min-h-screen'>
            <div className='text-center space-y-5'>
                <BarLoader
            color='#632EE3'/>
            <h1 className='text-xl font-bold'>Loading</h1>
            </div>
        </div>
    );
};

export default Loading;