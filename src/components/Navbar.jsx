import { Github } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router';
import logo from '../assets/logo.png'

const Navbar = () => {
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
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className='h-full flex justify-center'>
        <img src={logo}alt="" className='h-[40px]' />
        <a className="btn btn-ghost text-xl text-6xl 
    font-extrabold 
    bg-clip-text 
    text-transparent 
    bg-gradient-to-r 
    to-[#9F62F2] 
    from-[#632EE3]">PULSE</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-4 flex gap-8 items-center">
        <Link className='navbar-link-style text-[16px]' to=''>Home</Link>
        <Link className={`navbar-link-style text-[16px]`} to='/apps'>Apps</Link>
        <Link  className={`navbar-link-style text-[16px] `} to='/installation'>Installation</Link>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn !text-white border-0 bg-gradient-to-tl
      from-[#9F62F2] to-[#632EE3]"><FaGithub></FaGithub> Contribute</a>
  </div>
</div>
    );
};

export default Navbar;