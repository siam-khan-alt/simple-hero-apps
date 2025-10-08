import {  useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import dwnpng from '../../assets/icon-downloads.png'
import ratingpng from '../../assets/icon-ratings.png'
import repng from "../../assets/icon-review.png";
import Recharts from "./Recharts/Rechrts";
import { addStoreApp, getstoreApp, removeStoreApp } from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";


const Details = () => {
   const [isInstalled, setIsInstalled] = useState(false);  
    const {apps}=useApps()
  const { id } = useParams();
  const appid = parseInt(id);
  
  const singleApp = apps.find((app) => app.id === appid);

 useEffect(() => {
    const storeAppData = getstoreApp();
    setIsInstalled(storeAppData.includes(appid));
  }, [appid]);

 const handleInstallApp=id=>{
  if (isInstalled) {
      removeStoreApp(id);
      setIsInstalled(false);
    } else {
      addStoreApp(id);
      setIsInstalled(true);
    }
  }

  return (
    <div className="p-4 bg-gray-200 sm:p-12 md:p-16 lg:p-20 grid gap-10">
      
        <div className="">
         <div className=" border-b pb-10 border-gray-400 ">
          <div className=" flex flex-col md:flex-row items-center gap-10">
            <img
             src={singleApp?.image}
              className="max-w-[350px] max-h-[350px] rounded-lg  shadow-2xl"/>
             <div className="flex-1">
              <div className="w-full border-b border-gray-400  pb-3">
                    <h1 className="text-5xl font-bold">{singleApp?.title}</h1>
                <p className="">
                 {singleApp?.companyName}</p>
              </div>
                 <div className="flex items-center gap-6 my-7">
                    <div>
                        <img src={dwnpng} alt="" className="h-10 w-10" />
                        <p>Downloads</p>
                        <h4 className="font-extrabold text-[40px]">{singleApp?.downloads}</h4>
                    </div>
                    <div>
                        <img src={ratingpng} alt="" className="h-10 w-10" />
                        <p>Average Ratings</p>
                        <h4 className="font-extrabold text-[40px]">{singleApp?.ratingAvg}</h4>
                    </div>
                    <div>
                        <img src={repng} alt="" className="h-10 w-10" />
                        <p>Total Reviews</p>
                        <h4 className="font-extrabold text-[40px]">{singleApp?.reviews}</h4>
                    </div>
                 </div>
               <button onClick={()=>handleInstallApp(singleApp?.id)} className={`btn text-white ${isInstalled ? 'bg-gray-500' : 'bg-[#00D390]'}`}> {isInstalled ? 'Installed ✓' : `Install Now (${singleApp?.size}MB)`}</button>
             </div>
            </div>
          </div>
        </div>


        <div className="border-b pb-10 border-gray-300">
            <h1 className="text-2xl font-semibold mb-6">Ratings</h1>
            <div className="w-full md:w-3/4 lg:w-3/3 mx-auto ">
                {
                    <Recharts rat={singleApp?.ratings}></Recharts>
                }
            </div>
        </div>
        <div>
            <h1 className="text-2xl font-semibold mb-6">Description</h1>
            <p>{singleApp?.description}</p>
        </div>
        
      
    </div>
  );
};

export default Details;