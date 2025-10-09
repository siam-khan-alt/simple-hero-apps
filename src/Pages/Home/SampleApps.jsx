import React from 'react';
import useApps from '../../Hooks/useApps';
import AppCard from '../../Component/AppCard/AppCard';
import { Link } from 'react-router';
import { RingLoader } from 'react-spinners';

const SampleApps = () => {
    const {apps}=useApps()
    const sampleapps= apps.slice(0,8)
   
    
    return (
        <div className=' grid justify-center items-center text-center p-4 sm:p-12 md:p-16 lg:p-20'>
            <h2 className='  font-bold text-5xl'>Trending Apps</h2>
            <p className='text-[#627382] mt-4 mb-6 md:mb-8  lg:mb-10'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid max-w-[1440px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4'>
                {
                sampleapps.map(singleApp=>(<AppCard key={singleApp.id} singleApp={singleApp}></AppCard>))
                }
            </div>
            <Link to={'/apps'}><button className='btn text-white  bg-gradient-to-br from-[#632EE3] to-[#9F62F2] mt-5 md:mt-10'>Show All</button></Link>
        </div>
    );
};

export default SampleApps;