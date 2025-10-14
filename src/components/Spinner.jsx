import React from 'react';
import { PulseLoader } from 'react-spinners';

const Spinner = () => {
    return (
        <div className='text-center flex items-center justify-center h-full'>
            <PulseLoader color='#632EE3'/>
        </div>
    );
};

export default Spinner;