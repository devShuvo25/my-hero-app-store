import { Github } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';
import logo from '../assets/logo.png'
import { useState } from 'react';

const Navbar = () => {
    const navLink = [
        {id:1,name:'Home',path:'/home'},
        {id:2,name:'Apps',path:'/apps'},
        {id:3,name:'Installation',path:'/installation'}
    ];

    
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">


    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/apps'}>Apps</NavLink></li>
        <li><NavLink to={'/installation'}>Installation</NavLink></li>
      </ul>
    </div>
    
    <div className='h-full flex justify-center items-center gap-2'>
        <img src={logo}alt="" className='h-[40px]' />
        <Link to={'/'} className=" text-xl 
    font-extrabold 
    bg-clip-text 
    text-transparent 
    bg-gradient-to-r 
    to-[#9F62F2] 
    from-[#632EE3]">PULSE</Link>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal lg:text-lg px-4 flex gap-8 items-center">
        {
            navLink.map(link => <NavLink to={link.path}  
            key={link.id}
             className={({isActive})=> 
              isActive? 
             'text-[#632EE3]  underline transition-500' :
             ''
              }>{link.name}</NavLink> )
        }
        
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/devShuvo25' className="btn !text-white border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]"><FaGithub></FaGithub> Contribute</a>
  </div>
</div>
    );
};

export default Navbar;