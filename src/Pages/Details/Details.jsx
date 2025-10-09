import { useParams } from "react-router";
import useApps from "../../Hooks/useApps";
import dwnpng from "../../assets/icon-downloads.png";
import ratingpng from "../../assets/icon-ratings.png";
import repng from "../../assets/icon-review.png";
import Recharts from "./Recharts/Rechrts";
import {
  addStoreApp,
  getstoreApp,
  removeStoreApp,
} from "../../Utility/LocalStorage";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import ErrorHandleApp from "../Eror Handle/ErrorHandleApp";
import { RingLoader } from "react-spinners";

const Details = () => {
  const [isInstalled, setIsInstalled] = useState(false);
  const { apps, loading } = useApps();
  const { id } = useParams();
  const appid = Number(id);

  const singleApp = apps.find((app) => app.id === appid);

  useEffect(() => {
    if (!apps.length) return;
    const storeAppData = getstoreApp();
    setIsInstalled(storeAppData.includes(appid));
  }, [appid, apps]);

  const handleInstallApp = (id) => {
    if (!singleApp) return;
    if (isInstalled) {
      removeStoreApp(id);
      setIsInstalled(false);
      toast(`${singleApp.title} Uninstalled Successfully!`);
    } else {
      addStoreApp(id);
      setIsInstalled(true);
      toast(`${singleApp.title} Installed Successfully!`);
    }
  };

  if (isNaN(appid)) return <ErrorHandleApp />;
  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <RingLoader color="#632EE3" size={80} />
      </div>
    );

  if (!singleApp) return <ErrorHandleApp></ErrorHandleApp>;
  return (
    <div className="p-4 bg-gray-200 sm:p-12 md:p-16 lg:p-20 grid gap-10">
      <div className="">
        <div className=" border-b pb-10 border-gray-300 ">
          <div className=" flex flex-col md:flex-row items-center  gap-10">
            <img
              src={singleApp?.image}
              className="max-w-[250px] md:max-w-[350] max-h-[350px] rounded-lg  shadow-2xl"
            />
            <div className="flex-1">
              <div className="w-full grid items-center  border-b border-gray-300  pb-3">
                <h1 className="text-5xl font-bold">{singleApp?.title}</h1>
                <p className="text-[#627382] mt-2">
                  Developed by
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
                    {singleApp?.companyName}
                  </span>
                </p>
              </div>
              <div className="flex md:flex-row flex-col items-center md:items-start justify-start  gap-6 my-7">
                <div>
                  <img src={dwnpng} alt="" className="h-10 w-10" />
                  <p>Downloads</p>
                  <h4 className="font-medium md:font-extrabold text-2xl md:text-[40px]">
                    {singleApp?.downloads}
                  </h4>
                </div>
                <div>
                  <img src={ratingpng} alt="" className="h-10 w-10" />
                  <p>Average Ratings</p>
                  <h4 className="font-medium md:font-extrabold text-2xl md:text-[40px]">
                    {singleApp?.ratingAvg}
                  </h4>
                </div>
                <div>
                  <img src={repng} alt="" className="h-10 w-10" />
                  <p>Total Reviews</p>
                  <h4 className="font-medium md:font-extrabold text-2xl md:text-[40px]">
                    {singleApp?.reviews}
                  </h4>
                </div>
              </div>
              <button
                onClick={() => handleInstallApp(singleApp?.id)}
                className=" btn bg-[#00D390] text-white "
                disabled={isInstalled}
              >
                {" "}
                {isInstalled
                  ? "Installed ✓"
                  : `Install Now (${singleApp?.size}MB)`}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b pb-10 border-gray-300">
        <h1 className="text-2xl font-semibold mb-6">Ratings</h1>
        <div className="w-full md:w-3/4 lg:w-3/3 mx-auto ">
          {<Recharts rat={singleApp?.ratings}></Recharts>}
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
