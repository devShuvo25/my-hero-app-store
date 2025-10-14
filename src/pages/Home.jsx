import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router';
import Loading from './Loading';

const Home = () => {
    const [data,isLoading] = useFetch();
    const apps = data.slice(0,6);

    return (
        <div>
            <Banner/>
           <div className='text-center space-y-3 py-10'>
             <h1 className='text-3xl font-semibold'>Trending Apps</h1>
            <p className='opacity-70'>Explore All Trending Apps on the Market developed by us</p>
           </div>
           <div className='px-8 grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {
             isLoading? <Loading/> :   apps.map( app => <Card key={app.id} app={app}/>)
            }
           </div>
           <div className='text-center p-8'>
            <Link to='/apps' className="btn !text-white border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]">See All Apps</Link>
           </div>
        </div>
    );
};

export default Home;