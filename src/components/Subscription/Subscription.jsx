import React from 'react';
import bg from '../../assets/subscription/Group 77.png';
const Subscription = () => {
  return (
    <div
      className=' h-[387px] w-full mx-6 grid grid-cols-1 content-evenly lg:grid-cols-2 items-center  '
      style={{backgroundImage: `url('${ bg}')`}}
    >
      {/* text content */}
      <div className=' text-center flex flex-col '>
        <h5 className=' text-[24px] font-semibold mb-2'>Subscribe Newsletter</h5>
        <p className=' text-sm text-[#565656]'> I will update good news and promotion service not spam</p>
      </div>
      {/* mail input box content */}
      <div className=' flex justify-center  '>
        <div class=" flex ">
            <div class="relative">
                <input type="text" class="h-14  sm:w-[480px] pl-10 pr-20  z-0 focus:shadow focus:outline-none drop-shadow-2xl rounded-full" placeholder="Enter your email address..."/>
                <div className="absolute top-2 right-2 px-4 "> <button className=" py-2 text-white rounded-full px-4 bg-[#2639ED] hover:bg-red-600">Contact Now</button> </div>
            </div>
        </div>
      </div>
</div>
  );
};

export default Subscription;