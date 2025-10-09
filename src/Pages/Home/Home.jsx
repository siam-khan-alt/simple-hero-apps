import React from "react";
import Hero from "./Hero";
import Community from "./Community";
import SampleApps from "./SampleApps";
import useApps from "../../Hooks/useApps";
import { RingLoader } from "react-spinners";

const Home = () => {
  const { loading } = useApps();
  if (loading)
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <RingLoader color="#632EE3" size={80} />
      </div>
    );

  return (
    <div className="bg-gray-200">
      <Hero></Hero>
      <Community></Community>
      <SampleApps></SampleApps>
    </div>
  );
};

export default Home;
