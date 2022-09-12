import React from 'react';
import fb from '../../assets/footer/Group.png';
import ln from '../../assets/footer/linkedin.png';
import tw from '../../assets/footer/twitter.png';
const Footer = () => {
  return (
    <div className=' mx-6 pl-8 my-[50px]'>
      {/* Footer section */}
      <section className=' grid grid-cols-1 md:grid-cols-4 gap-6'>
        {/* part one */}
        <div className=' '>
          <h5 className='text-2xl'><span className=' font-bold'> A+</span>Studio</h5>
          <p className=' text-sm text-[#565656] my-3'>Leading digital agency with solid design and development expertise. We build ready-made websites, mobile applications, and elaborate online business services.</p>
          {/* contacts icons section */}
          <div className=' flex  '>
            <img className=' mr-4' src={fb} alt="" />
            <img className=' mr-4' src={ln} alt="" />
            <img className=' mr-4' src={tw} alt="" />
          </div>
        </div>
        {/* part two */}
        <div className='col-span-3 grid grid-cols-1 md:grid-cols-2 '>
          {/* first two of services */}
          <div className=' grid grid-cols-2'>
            {/* first footer service */}
            <div>
              <h6 className=' font-semibold'>What We Do</h6>
              <ul className=' text-sm text-[#565656] my-3'>
                <li><a href="#">Web Design </a></li>
                <li><a href="#">App Design </a></li>
                <li><a href="#">Social Media Manage </a></li>
                <li><a href="#">Market Analysis Project </a></li>
              </ul>
            </div>
            {/* second footer service */}
            {/* first footer service */}
            <div className=' '>
              <h6 className=' font-semibold'>Company</h6>
              <ul className=' text-sm text-[#565656] my-3'>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Career</a></li>
                <li><a href="#">Become Investor </a></li>
              </ul>
            </div>
          </div>
          {/* second two of services */}
          <div className=' grid grid-cols-2'>
            {/* third footer service */}
            <div>
              <h6 className=' font-semibold'>Support</h6>
              <ul className=' text-sm text-[#565656] my-3'>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Policy</a></li>
                <li><a href="#">Business </a></li>
              </ul>
            </div>
            {/* fourth footer service */}
            <div>
              <h6 className=' font-semibold'>Contact</h6>
              <ul className=' text-sm text-[#565656] my-3'>
                <li><a href="#">WhatsApp</a></li>
                <li><a href="#">Support 24/7</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <hr className=' my-8' />
      <div className=' text-center'>
        <small className=' text-xs'>Copyright © 2022 Shazzadul_Shakib</small>
      </div>
  
    </div>
  );
};

export default Footer;