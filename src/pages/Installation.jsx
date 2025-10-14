import React from 'react';
import InstalledAppCard from '../components/InstalledAppCard';
import useInstalled from '../hooks/useInstalled';
import { Link } from 'react-router';

const Installation = () => {
const [installedApps] = useInstalled();
console.log(installedApps);

    
    return (
        <div>
            {
                installedApps.map(app => <InstalledAppCard app={app}/>)
            }
            <div className='text-center'>
                                    <Link
          to="/"
          className="btn !text-white border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]"
        >Go to Home</Link>
            </div>
        </div>
    );
};

export default Installation;