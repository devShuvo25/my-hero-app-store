import React from 'react';
import errorimg from '../assets/error-404.png'

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center gap-5'>
            <div>
                <img src={errorimg} alt="" />
            </div>
            <div className='text-center space-y-3'>
                <h1 className='text-2xl'>Oops, page not found!</h1>
                <p className='opacity-70'>The page you are looking for is not available.</p>
                    <a href='/' className="btn !text-white border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]">Go Back</a>
            </div>
        </div>
    );
};

export default Error;