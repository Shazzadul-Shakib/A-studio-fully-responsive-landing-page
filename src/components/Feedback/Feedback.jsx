import React from 'react';
import customer from '../../assets/feedback/unsplash_MTZTGvDsHFY.png';
import customer_bg from '../../assets/feedback/Ellipse 94.png';
import text_bg from '../../assets/feedback/Ellipse 93.png';
const Feedback = () => {
  return (
    <div className=' my-10'>
      {/* Header content of feedback section */}
      <div className=' text-center mx-6'>
        <h3 className=' text-[34px] font-semibold mb-2'>What our happy client say</h3>
        <p className=' text-sm text-[#565656]'>Several selected clients, who already believe in our service.</p>
      </div>
      {/* Feedback content section */}
      <div className=' md:m-10 p-6 grid grid-cols-1 lg:grid-cols-2 items-center justify-center'>
        {/* Image of feedback customer */}
        <div className=' bg-no-repeat  bg-left'
          style={{backgroundImage: `url('${ customer_bg}')`}}
        >
          <img src={customer} alt="Happy customer" />
        </div>
        {/* text content of feedback */}
        <div
          className=' bg-no-repeat bg-right-bottom py-10'
          style={{backgroundImage: `url('${text_bg}')`}}
        >
          <h5 className=' text-[24px] font-semibold mb-2'>Matthew Paul</h5>
          <p>Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</p>
          
        </div>
      </div>
    </div>
  );
};

export default Feedback;