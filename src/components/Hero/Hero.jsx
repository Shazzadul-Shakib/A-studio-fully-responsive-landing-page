import React from 'react';
import hero_img from '../../assets/hero/image 8.png';
const Hero = () => {
  return (
    <div className=' mx-[50px] grid gap-12 grid-cols-1 my-8 md:my-12 md:mx-10 md:gap-20 md:grid-cols-2 lg:mx-16 '>
      {/* left side */}
      <div className=' flex justify-center items-center order-2 md:order-1'>
        <div id='content' className=' ml-6'>
          <h2 className=' font-semibold text-black sm:font-semibold md:text-xl  lg:text-4xl  '>A Digital product Agency</h2>
          <p className='text-[#565656] text-xs py-5 md:text-sm md:py-5 lg:py-8'>Leading digital agency with solid design and development expertise. We build ready-made websites, mobile  applications and elaborate online business services.</p>
          <button className=' bg-[#2639ED] text-white rounded-[60px] hover:bg-slate-300 hover:text-[#2639ED] py-2 px-3 md:py-3 md:px-6 lg:py-5 lg:px-10 '>Contact Now</button>
        </div>
      </div>

      {/* right side */}
      <div className=' order-1 md:order-2'>
        <img src={hero_img} alt="meeting" />
      </div>
    </div>
  );
};

export default Hero;