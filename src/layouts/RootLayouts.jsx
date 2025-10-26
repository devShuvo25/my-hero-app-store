import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';

const RootLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen max-w-[1440px] mx-auto'>
            <ToastContainer/>
            <Navbar/>
            <main className='flex-1 py-10 lg:py-10'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayouts;