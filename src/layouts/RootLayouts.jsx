import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const RootLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar/>
            <main className='flex-1 py-10 lg:py-10'>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default RootLayouts;