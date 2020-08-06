import React, { useEffect, useState } from "react";
import Restaurant from "./Restaurant/Restaurant";
import Spinner from "../../Components/UI/Spinner/Spinner";

const RestaurantContainer = () => {
  const mockedRestaurantData = {
    restaurantName: "Tivoli",
    restaurantAddress: "Tetovo",
    restaurantContact: "070333444",
    resImage: "imageIrl",
    categories: [
      { id: 1, catName: "burgers" },
      { id: 2, catName: "pizza" },
      { id: 3, catName: "hot meal" },
      { id: 4, catName: "salats" },
      { id: 5, catName: "seafood" }
    ],
    restaurantMenus: [
      {
        id: 1,
        menuName: "Hamburger",
        menuImgUrl: "...",
        category: "burgers",
        ingredients: "",
        price: 150
      },
      {
        id: 2,
        menuName: "Pizza",
        menuImgUrl: "...",
        category: "pizza",
        ingredients: "",
        price: 190
      },
      {
        id: 3,
        menuName: "Spaghetti",
        menuImgUrl: "...",
        category: "hot meal",
        ingredients: "",
        price: 190
      },
      {
        id: 4,
        menuName: "Carbonara",
        menuImgUrl: "...",
        category: "hot meal",
        ingredients: "",
        price: 190
      },
      {
        id: 5,
        menuName: "Greek salat",
        menuImgUrl: "...",
        category: "salats",
        ingredients: "",
        price: 190
      },
      {
        id: 6,
        menuName: "Fish",
        menuImgUrl: "...",
        category: "sea food",
        ingredients: "",
        price: 190
      },
      {
        id: 7,
        menuName: "Big burger",
        menuImgUrl: "...",
        category: "burgers",
        ingredients: "",
        price: 190
      },
      {
        id: 8,
        menuName: "Pizza fungi",
        menuImgUrl: "...",
        category: "pizza",
        ingredients: "",
        price: 190
      },
      {
        id: 9,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      },
      {
        id: 10,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      },
      {
        id: 11,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      },
      {
        id: 12,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      },
      {
        id: 13,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      },
      {
        id: 14,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      },
      {
        id: 15,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      },
      {
        id: 16,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      },
      {
        id: 17,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      },
      {
        id: 18,
        menuName: "Pizza",
        menuImgUrl: "...",
        ingredients: "",
        price: 190
      }
    ]
  };

  const [state, setState] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const sleep = milliseconds => {
    return new Promise(resolve =>
      setTimeout(resolve => {
        setIsLoading(false);
        setState(mockedRestaurantData);
        return resolve;
      }, milliseconds)
    );
  };
  useEffect(() => {
    const fakeApiCall = async () => {
      await sleep(1000);
    };
    fakeApiCall();
    return;
  }, [isLoading]);

  return (
    <>{isLoading ? <Spinner /> : <Restaurant resData={mockedRestaurantData} />}</>
  );
};
export default RestaurantContainer;
