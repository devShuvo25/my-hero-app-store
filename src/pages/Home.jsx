import React from 'react';
import Banner from '../components/Banner';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router';
import Loading from './Loading';
import Spinner from '../components/Spinner';

const Home = () => {
    const [data,isLoading] = useFetch();
    const apps = data.slice(0,6);
    console.log(isLoading);

    return (
        <div>
            <title>PULSE - Home</title>
            <Banner/>
           <div className='text-center space-y-3 py-10 px-5'>
             <h1 className='text-3xl font-bold '>Trending Apps</h1>
            <p className='opacity-70'>Explore All Trending Apps on the Market developed by us</p>
           </div>
           {
            isLoading? <Spinner/> :

           <div className='px-8 grid grid-cols-1 lg:grid-cols-3 gap-10'>
            {
                apps.map( app => <Card key={app.id} app={app}/>)
            }
           </div>
           }
           <div className='text-center p-8'>
            <Link to='/apps' className="btn !text-white border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]">See All Apps</Link>
           </div>
        </div>
    );
};

export default Home;