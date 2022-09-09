import React, { useState } from 'react';
import logo from '../../assets/navbar/logo.png';
import menu from '../../assets/navbar/bars-solid.svg';
import close from '../../assets/navbar/xmark-solid.svg';


const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      <nav className=' mx-[50px] flex justify-between items-center my-8 md:mx-10  lg:mx-16 '>
        <img className='' src={logo} alt="A+ studio" />
        <div>
        <ul className=' hidden md:flex text-[#000000] sm:text-sm lg:text-base'>
          <li className=' ml-10 sm:ml-7'><a href="#">Home</a></li>
          <li className=' ml-10 sm:ml-7'><a href="#">What We Do</a></li>
          <li className=' ml-10 sm:ml-7'><a href="#">Service</a></li>
          <li className=' ml-10 sm:ml-7'><a href="#">Project</a></li>
          <li className=' ml-10 sm:ml-7'><a href="#">Blog</a></li>
          <li className=' ml-10 sm:ml-7'><a href="#">Contact</a></li>
          </ul>

          {/* Menu and cross bar will appear here */}
          <div>
            <img className='flex md:hidden object-contain h-7' src={toggle? close : menu} alt=""  onClick={() => setToggle((prev) => !prev)} />
          </div>
          <div className={`${toggle? 'visible': 'hidden'} md:hidden bg-[#2639ED] justify-center py-6 rounded-l-xl right-0 top-16 absolute min-w-[140px]`} >
            <ul className=' text-white my-2 '>
              <li className=' ml-10 my-4'><a href="#">Home</a></li>
              <li className=' ml-10 my-4'><a href="#">What We Do</a></li>
              <li className=' ml-10 my-4'><a href="#">Service</a></li>
              <li className=' ml-10 my-4'><a href="#">Project</a></li>
              <li className=' ml-10 my-4'><a href="#">Blog</a></li>
              <li className=' ml-10 my-4'><a href="#">Contact</a></li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;