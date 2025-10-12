import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';

const Home = () => {
    return (
        <div>
            <Banner/>
           <div className='text-center space-y-3 py-10'>
             <h1 className='text-3xl font-semibold'>Trending Apps</h1>
            <p className='opacity-70'>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <Card></Card>
        </div>
    );
};

export default Home;