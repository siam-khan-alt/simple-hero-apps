import React from 'react';
import dwnpng from '../../assets/icon-downloads.png'
import ratingpng from '../../assets/icon-ratings.png'
const InstallCard = ({singleApp ,handleUninstall}) => {
    return (
        <div>
            <div className='flex bg-base-100  shadow-sm p-4 justify-between items-center'>
                    <div className=" flex   ">
              
                <img
                  src={singleApp.image}
                  alt="" className=' object-contain h-20 w-20' />
              
              <div className="  ">
                <h2 className="text-[20px] font-medium">{singleApp.title}</h2>
                <div className="flex justify-between items-center">
                  <p className='flex items-center rounded-sm    text-[#00D390]'><img src={dwnpng} alt="" className='h-4 w-4 mr-2' />{singleApp.downloads}</p>
                  <p className='flex items-center  text-[#00D390]  rounded-sm  '><img src={ratingpng} alt="" className='h-4 w-4 mr-2' />{singleApp.ratingAvg}</p>
                  <p className='text-[#627382]'>{singleApp.size}MB</p>
                </div>
              </div>
            </div>
            <button onClick={()=>handleUninstall(singleApp.id)} className='btn'>Unistall</button>
                    </div>
        </div>
    );
};

export default InstallCard;