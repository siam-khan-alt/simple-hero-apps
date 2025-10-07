
import { NavLink } from 'react-router';
import png from '../../assets/logo.png'
import { Github } from 'lucide-react';

const Navbar = () => {
    return (
        <>
           
            <div className='navbar bg-base-100 px-3 md:px-14 lg:px-20 '>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <div
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         <NavLink to={'/'}>Home</NavLink>
      <NavLink to={'/apps'}>Apps</NavLink>
      <NavLink to={'/installed'}>Installation</NavLink>
      </div>
    </div>
    <a className="btn  btn-ghost "> <img src={png} alt="" className='h-10 w-10' />HERO.IO</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <div className="menu menu-horizontal flex gap-4 px-1">
      <NavLink to={'/'}  className='font-semibold'>Home</NavLink>
      <NavLink to={'/apps'}  className='font-semibold'>Apps</NavLink>
      <NavLink to={'/installed'}  className='font-semibold'>Installation</NavLink>
    </div>
  </div>
  <div className="navbar-end">
    
    <button className="btn text-white  bg-gradient-to-br from-[#632EE3] to-[#9F62F2]"> <Github />Contribute</button>
  </div>
</div>

        </>
    );
};

export default Navbar;