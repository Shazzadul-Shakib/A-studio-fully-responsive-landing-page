import React from 'react';
import search from '../../assets/servicees/box-search 1.png';
import code from '../../assets/servicees/code-1 1.png';
import wallet from '../../assets/servicees/empty-wallet 1.png';
import chart from '../../assets/servicees/chart-square 1.png';
const Services = () => {
  return (
    <div className=' my-6'>
      {/* Main section of services */}
      <section className=' grid grid-cols-1 md:grid-cols-2 items-center'>
        {/* text content div 1 */}
        <div className='  text-center my-5'>
          <h3 className='  text-[34px] font-semibold mb-2'>How can we help<br/> your Business ?</h3>
          <p className=' text-sm text-[#565656]'>We build readymade websites, mobile<br/> applications, and elaborate online business<br/> services.</p>
        </div>
        {/* box content div 2 */}
        <div className=' flex gap-2 sm:justify-center md:gap-5 lg:justify-start'>
          {/* first two boxes */}
          <div>
            <div className=' bg-white drop-shadow-xl h-[300px] w-[200px] rounded-xl pt-16 pb-16 pr-8 pl-8 flex flex-col justify-center items-center stroke-[#F2F2F2]  mb-6'>
              <img src={search} className=' bg-[#F1F7FF] p-3 rounded-xl' alt="search" />
              <h4 className=' font-semibold py-5'>Business Idea Planning</h4>
              <p className=' text-xs text-[#565656] '>We present you a proposal and discuss niffty-gritty like</p>
            </div>
            <div className=' bg-white drop-shadow-xl h-[300px] w-[200px] rounded-xl pt-16 pb-16 pr-8 pl-8 flex flex-col justify-center items-center stroke-[#F2F2F2]  '>
              <img src={code} className=' bg-[#FFF2F8] p-3 rounded-xl' alt="search" />
              <h4 className=' font-semibold py-5'>Development Website and App</h4>
              <p className=' text-xs text-[#565656] '>Communication protocols apart from engagement models</p>
            </div>
          </div>
          {/* second two boxes */}
          <div>
          <div className=' bg-white drop-shadow-xl h-[300px] w-[200px] rounded-xl pt-16 pb-16 pr-8 pl-8 flex flex-col justify-center items-center stroke-[#F2F2F2]  mb-6'>
              <img src={wallet} className=' bg-[#FFF7E3] p-3 rounded-xl' alt="search" />
              <h4 className=' font-semibold py-5'>Financial Planning System</h4>
              <p className=' text-xs text-[#565656] '>Protocols apart from engage models, pricing billing</p>
            </div>
            <div className=' bg-white drop-shadow-xl h-[300px] w-[200px] rounded-xl pt-16 pb-16 pr-8 pl-8 flex flex-col justify-center items-center stroke-[#F2F2F2]  '>
              <img src={chart} className=' bg-[#DEFFEE] p-3 rounded-xl' alt="search" />
              <h4 className=' font-semibold py-5'>Market Analysis Project</h4>
              <p className=' text-xs text-[#565656] '>Protocols apart from aengage models, pricing billing</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;