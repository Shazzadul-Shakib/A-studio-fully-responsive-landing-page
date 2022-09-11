import React from 'react';
import ft_img from '../../assets/feature/feature_img.png';
import circle from '../../assets/feature/circle_bg.png';
import rectengular_bg from '../../assets/feature/Rectangle_bg.png';
const Feature = () => {
  return (
    <div className=' my-8 grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
      {/* feature image part */}
      <div
        className=' p-8 bg-no-repeat bg-right-bottom'
        style={{backgroundImage: `url('${circle}')`}}
      >
        <img src={ft_img} alt="desk meeting" />
      </div>
      {/* feature text part */}
      <div
      className=' p-12 bg-no-repeat'
        style={{backgroundImage: `url('${ rectengular_bg}')`}}>
        <h5 className=' text-[34px] font-semibold mb-2'>Great Digital Product<br/> Agency since 2016 </h5>
        <p className=' text-sm text-[#565656]'>Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</p>
      </div>
    </div>
  );
};

export default Feature;