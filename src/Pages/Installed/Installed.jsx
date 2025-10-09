import React, { useEffect, useState } from "react";
import { getstoreApp, removeStoreApp } from "../../Utility/LocalStorage";
import useApps from "../../Hooks/useApps";
import InstallCard from "./InstallCard";
import { toast } from "react-toastify";
import { RingLoader } from "react-spinners";

const Installed = () => {
  const [Install, setInstall] = useState([]);
  const [sort, setSort] = useState("");
  const { apps, loading } = useApps();

  useEffect(() => {
    const storeAppData = getstoreApp();
    const convertStoreData = storeAppData.map((id) => parseInt(id));
    const installApplist = apps.filter((app) =>
      convertStoreData.includes(app.id)
    );
    setInstall(installApplist);
  }, [apps]);
  const handleSort = (type) => {
    setSort(type);
    if (type === "Low To High") {
      const addInstall = [...Install].sort((a, b) => a.downloads - b.downloads);
      setInstall(addInstall);
    }
    if (type === "High To Low") {
      const addInstall = [...Install].sort((a, b) => b.downloads - a.downloads);
      setInstall(addInstall);
    }
  };

  const handleUninstall = (id) => {
    const updatedInstall = Install.filter((app) => app.id !== id);
    const appToRemove = Install.find((app) => app.id === id);
    setInstall(updatedInstall);
    removeStoreApp(id);
    toast(` ${appToRemove?.title || "App"} Un-Install From Your Device!`);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <RingLoader color="#632EE3" size={80} />
      </div>
    );

  return (
    <div className=" bg-gray-200 grid   p-4 sm:p-12 md:p-16 lg:p-20">
      <div className="text-center">
        <h2 className="  font-bold text-5xl">Your Installed Apps</h2>
        <p className="text-[#627382] mt-4 mb-6 md:mb-8 lg:mb-10">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="w-full">
        <div className="flex justify-between items-center">
          <h4 className="text-2xl font-semibold">
            {Install.length} Apps Found{" "}
          </h4>
          <div>
            <details className="dropdown">
              <summary className="btn bg-[#D9D9D9] m-1">
                Sort By: {sort ? sort : ""}
              </summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-1 max-w-52 p-2 shadow-sm">
                <li onClick={() => handleSort("Low To High")}>
                  <a>Low To High</a>
                </li>
                <li onClick={() => handleSort("High To Low")}>
                  <a>High To Low</a>
                </li>
              </ul>
            </details>
          </div>
        </div>
        <div className="grid gap-4 rounded-sm">
          {Install.map((app) => (
            <InstallCard
              singleApp={app}
              handleUninstall={handleUninstall}
            ></InstallCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Installed;
