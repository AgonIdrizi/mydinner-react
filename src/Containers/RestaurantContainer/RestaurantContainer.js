import React from "react";
import Restaurant from "./Restaurant/Restaurant";

const RestaurantContainer = () => {
  const mockedRestaurantData = {
    restaurantName: "Tivoli",
    restaurantAddress: "Tetovo",
    restaurantContact: "070333444",
    resImage: "imageIrl",
    restaurantMenus: [
      { id: 1, menuName: "Hamburger", menuImgUrl: "...", ingredients: "", price: 150 },
      { id: 2, menuName: "Pizza", menuImgUrl: "...", ingredients: "", price: 190 }
    ]
  }

  return <Restaurant resData={mockedRestaurantData} />;
};
export default RestaurantContainer;
