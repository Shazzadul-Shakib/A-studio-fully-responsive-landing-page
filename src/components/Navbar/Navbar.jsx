import React, { useState } from 'react';
import logo from '../../assets/navbar/logo.png';
import menu from '../../assets/navbar/bars-solid.svg';
import close from '../../assets/navbar/xmark-solid.svg';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className=' mx-[20px] flex justify-between items-center my-8 md:mx-10  lg:mx-16 '>
        <img className='' src={logo} alt="A+ studio" />
        <div>
        <ul className=' hidden md:flex text-[#000000] sm:text-sm lg:text-base'>
          <li className=' sm:ml-7 lg:ml-10 hover:text-[#2639ED]'><a href="#">Home</a></li>
          <li className=' sm:ml-7 lg:ml-10 hover:text-[#2639ED]'><a href="#">What We Do</a></li>
          <li className=' sm:ml-7 lg:ml-10 hover:text-[#2639ED]'><a href="#">Service</a></li>
          <li className=' sm:ml-7 lg:ml-10 hover:text-[#2639ED]'><a href="#">Project</a></li>
          <li className=' sm:ml-7 lg:ml-10 hover:text-[#2639ED]'><a href="#">Blog</a></li>
          <li className=' sm:ml-7 lg:ml-10 hover:text-[#2639ED]'><a href="#">Contact</a></li>
          </ul>

          {/* Menu and cross bar will appear here */}
          <div className=' fixed z-50'>
            <img className='flex md:hidden object-contain h-7 fixed right-6 top-8' src={toggle? close : menu} alt="menu"  onClick={() => setToggle((prev) => !prev)} />
          </div>
          <div className={`${toggle? 'visible': 'hidden'} md:hidden bg-[#2639ED] justify-center py-6 rounded-l-xl right-0 top-16  min-w-[140px] fixed z-50 mt-2`} >
            <ul className=' text-white my-2 '>
              <li className=' ml-10 my-4 hover:text-slate-400'><a href="#">Home</a></li>
              <li className=' ml-10 my-4 hover:text-slate-400'><a href="#">What We Do</a></li>
              <li className=' ml-10 my-4 hover:text-slate-400'><a href="#">Service</a></li>
              <li className=' ml-10 my-4 hover:text-slate-400'><a href="#">Project</a></li>
              <li className=' ml-10 my-4 hover:text-slate-400'><a href="#">Blog</a></li>
              <li className=' ml-10 my-4 hover:text-slate-400'><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;