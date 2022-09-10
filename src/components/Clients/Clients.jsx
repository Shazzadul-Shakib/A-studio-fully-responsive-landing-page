import React from 'react';
import google from '../../assets/clients/Google Logo.png';
import airbnb from '../../assets/clients/Airbnb Logo.png';
import ubereats from '../../assets/clients/Uber Eats Logo.png';
import amazon from '../../assets/clients/Amazon Logo.png'; 
  
const Clients = () => {
  return (
    <div className=' mx-[30px] my-8 border rounded-xl border-gray-600 p-6 sm:gap-2 md:mx-[50px] md:grid md:grid-cols-3'>
      {/* Text content */}
      <div className=' text-center'>
        <h3 className=' font-semibold text-black sm:font-semibold md:text-xl  lg:text-4xl'>Our Clients</h3>
        <p className='text-[#565656] text-xs py-3 md:text-sm '>Several selected clients, who already believe in our service.</p>
      </div>
      {/* Logo of Clients */}
      <div className=' md:flex justify-center items-center sm:gap-2 md:col-span-2 lg:gap-3'>
        {/* first two */}
        <div className='flex justify-evenly my-4 md:flex-row '>
          <img className=' h-8 sm:h-6 md:mx-3 lg:mx-6' src={google} alt="google" />
          <img className=' h-8 sm:h-7 md:mx-3 lg:mx-6' src={airbnb} alt="airbnb" />
        </div>
        {/* second two */}
        <div className='flex justify-evenly md:flex-row'>
          <img className=' h-5 sm:h-4 md:mx-3' src={ubereats} alt="ubereats" />
          <img className=' h-7 sm:h-6 md:mx-3' src={amazon} alt="amazon" />
        </div>
      </div>
    </div>
  );
};

export default Clients;