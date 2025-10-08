import React from 'react';
import Hero from './Hero';
import Community from './Community';
import SampleApps from './SampleApps';

const Home = () => {
    return (
        <div>
           <Hero></Hero> 
           <Community></Community>
           <SampleApps></SampleApps>
        </div>
    );
};

export default Home;