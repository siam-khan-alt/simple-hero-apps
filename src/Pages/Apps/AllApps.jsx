import React, { useState } from "react";
import useApps from "../../Hooks/useApps";
import AppCard from "../../Component/AppCard/AppCard";
import { Link } from "react-router";
import { RingLoader } from "react-spinners";
const AllApps = () => {
  const { apps, loading } = useApps();

  const [search, setSearch] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);
  const term = search.trim().toLocaleLowerCase();
  const searcApps = term
    ? apps.filter((app) => app.title.toLocaleLowerCase().includes(term))
    : apps;

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setSearchLoading(true);
    setTimeout(() => {
      setSearchLoading(false);
    }, 500);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <RingLoader color="#632EE3" size={80} />
      </div>
    );

  return (
    <div className="bg-[#D9D9D9] grid justify-center items-center text-center p-4 sm:p-12 md:p-16 lg:p-20">
      <h2 className="  font-bold text-5xl">Our All Applications</h2>
      <p className="text-[#627382] mt-4 mb-6 md:mb-8 lg:mb-10">
        Explore All Apps on the Market developed by us. We code for Millions
      </p>
      <div className="flex justify-between items-center mb-4 flex-col-reverse md:flex-row col-span-full">
        <h3 className="text-2xl font-semibold">
          ({searcApps.length}) Apps Found
        </h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
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
          <input
            value={search}
            onChange={handleSearch}
            type="search"
            className="grow"
            placeholder="Search"
          />
        </label>
      </div>
      <div className="grid max-w-[1440px] mx-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center gap-4">
        {searchLoading ? (
          <div className="flex justify-center items-center w-[80vw] h-[60vh]">
            <RingLoader color="#632EE3" size={70} />
          </div>
        ) : searcApps.length > 0 ? (
          searcApps.map((singleApp) => (
            <AppCard key={singleApp.id} singleApp={singleApp} />
          ))
        ) : (
          <div className="flex flex-col justify-center    items-center h-[60vh] w-[80vw] gap-6">
            <h1 className="font-bold text-4xl  md:text-5xl text-[#627382]">
              No Apps Found
            </h1>
            <Link to="/apps">
              <button className="btn text-white         bg-gradient-to-br from-[#632EE3] to-[#9F62F2]">
                Show All Apps
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllApps;
