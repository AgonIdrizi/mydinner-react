import React, { useEffect } from "react";
import Home from "./Home/Home";
import HomeTextMarketing from "./HomeTextMarketing/HomeTextMarketing";
import HomeCards from "./HomeCards/HomeProductCards";
import { productCards, joinUsCards } from "../../config/constants";

const HomeContainer = () => {
  return (
    <div className="HomeContainer">
      <Home />
      <HomeTextMarketing
        className="FirstText"
        heading="Your everyday, right away"
        description="Order food and grocery delivery online from hundreds of restaurants and shops nearby"
      />
      <HomeCards cards={productCards} />
      <HomeTextMarketing heading="Join us" description="Be part of our story" />
      <HomeCards className="joinCard" cards={joinUsCards} />
    </div>
  );
};

export default HomeContainer;
