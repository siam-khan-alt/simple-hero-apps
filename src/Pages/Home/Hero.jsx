import React from 'react';
import pstore from '../../assets/playstore.jpg' 
import astore from '../../assets/app.svg'
import heroimg from '../../assets/hero.png'
const Hero = () => {
    return (
        <div className='grid gap-10 px-3 justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-center'>
               <h1 className='font-bold text-3xl md:text-5xl lg:text-7xl'>We Build <br/>
               <span className='text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
               <p className='mt-4 mb-6 text-[#627382]'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <span className='md:flex hidden'><br/></span> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
               <div className='flex gap-4 items-center'>
                <button className='btn flex items-center'><img src={pstore} alt="" className='w-8 h-8'/><span className='text-[20px] font-semibold'>Google Play</span></button>
                <button className='btn flex items-center'><img src={astore} alt="" className='w-8 h-8'/><span  className='text-[20px] font-semibold'>App Store</span></button>
               </div>
            </div>


            
             <img src={heroimg} alt="" className='mx-auto' />
          
        </div>
    );
};

export default Hero;