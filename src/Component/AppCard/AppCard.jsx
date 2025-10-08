import React from 'react';
import dwnpng from '../../assets/icon-downloads.png'
import ratingpng from '../../assets/icon-ratings.png'
import { Link } from 'react-router';

const AppCard = ({singleApp}) => {
    return (
       <Link to={`/details/${singleApp.id}`}>
        <div>
            <div className="card bg-base-100 max-w-96 shadow-sm p-4">
  <figure>
    <img
      src={singleApp.image}
      alt="" className=' object-contain max-w-[316px] md:h-[280px] lg:h-[316px]' />
  </figure>
  <div className="  ">
    <h2 className="card-title my-4">{singleApp.title}</h2>
    <div className="flex justify-between items-center">
      <p className='flex items-center rounded-sm py-[6px] px-2 bg-[#F1F5E8] font-medium text-[#00D390]'><img src={dwnpng} alt="" className='h-4 w-4 mr-2' />{singleApp.downloads}</p>
      <p className='flex font-medium items-center bg-[#FFF0E1] text-[#00D390]  rounded-sm py-[6px] px-2 '><img src={ratingpng} alt="" className='h-4 w-4 mr-2' />{singleApp.ratingAvg}</p>
    </div>
  </div>
</div>
        </div>
       </Link>
    );
};

export default AppCard;