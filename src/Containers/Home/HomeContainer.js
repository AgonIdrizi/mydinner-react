import React, { useEffect } from 'react';
import Home from './Home/Home';
import HomeTextMarketing from './HomeTextMarketing/HomeTextMarketing';
import HomeCards from './HomeCards/HomeProductCards';

const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <Home />
      <HomeTextMarketing />
      <HomeCards />
    </div>
  );
}

export default HomeContainer;
