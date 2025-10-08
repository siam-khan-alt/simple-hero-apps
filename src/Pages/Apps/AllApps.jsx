import React, { useState } from 'react';
import useApps from '../../Hooks/useApps';
import AppCard from '../../Component/AppCard/AppCard';

const AllApps = () => {
  const {apps}=useApps()
    
  const [search, setSearch] = useState('')
  const term = search.trim().toLocaleLowerCase()
  const searcApps = term
    ? apps.filter(app =>
        app.title.toLocaleLowerCase().includes(term)
      )
    : apps
          
          
          
          return (
              <div className=' grid justify-center items-center text-center p-4 sm:p-12 md:p-16 lg:p-20'>
                  <h2 className='  font-bold text-5xl'>Our All Applications</h2>
                  <p className='text-[#627382] mt-4 mb-6 md:mb-8 lg:mb-10'>Explore All Apps on the Market developed by us. We code for Millions</p>
                  <div className='flex justify-between items-center mb-4 flex-col-reverse md:flex-row'>
                    <h3 className='text-2xl font-semibold'>({searcApps.length}) Apps Found</h3>
                    <label className="input">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                     <g
                     strokeLinejoin="round"
                      strokeLinecap="round"
                     strokeWidth="2.5"
                       fill="none"
                     stroke="currentColor"
                           >
                    <circle cx="11" cy="11" r="8"></circle>
                       <path d="m21 21-4.3-4.3"></path>
                      </g>
                   </svg>
                  <input value={search} onChange={e => setSearch(e.target.value)} type="search" className="grow" placeholder="Search" />
              
                   </label>
                  </div>
                  <div className='grid max-w-[1440px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4'>
                      {
                      searcApps.map(singleApp=>(<AppCard key={singleApp.id} singleApp={singleApp}></AppCard>))
                      }
                  </div>
              </div>
          );
};

export default AllApps;