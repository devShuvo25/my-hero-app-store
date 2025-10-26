import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

const NoApps = () => {
    return (
        <div className='py-5
        '>
            <title>PULSE - No Apps Found</title>
             <div className='flex flex-col gap-2 items-center h-50'>
                <IoWarningOutline size={100} color='#FF8811' />
                <h1 className='text-3xl font-extrabold
                text-[#9F62F2]'>No Apps found</h1>
             </div>
        </div>
    );
};

export default NoApps;