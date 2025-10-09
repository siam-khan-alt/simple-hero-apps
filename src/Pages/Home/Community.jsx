import React from "react";

const Community = () => {
  return (
    <div className="text-white bg-gradient-to-br from-[#632EE3] to-[#9F62F2] px-2 py-10 md:py-20 grid justify-center items-center ">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-5 md:mb-10">
        Trusted by Millions, Built for You
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6">
        <div className="w-[342px] mx-auto text-center">
          <p>Total Downloads</p>
          <h2 className="text-4xl md:text-[64px] font-extrabold ">29.6M</h2>
          <p>21% more than last month</p>
        </div>
        <div className="w-[342px] mx-auto text-center">
          <p>Total Reviews</p>
          <h2 className="text-4xl md:text-[64px] font-extrabold">906K</h2>
          <p>46% more than last month</p>
        </div>
        <div className="w-[342px] mx-auto text-center">
          <p>Active Apps</p>
          <h2 className="md:text-[64px] font-extrabold text-4xl ">132+</h2>
          <p>31 more will Launch</p>
        </div>
      </div>
    </div>
  );
};

export default Community;
