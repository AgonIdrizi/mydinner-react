import React from "react";
import useDataApi from "../../hooks/useDataApi";
import Restaurants from "./Restaurants/Restaurants";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { TestApiUrls } from "../../config/testApiUrls";

const RestaurantsContainer = () => {
  //const [isLoading, setIsLoading] = useState(false);
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    TestApiUrls.restaurantsGet
  );

  return (
    <>
      {isLoading ? <Spinner /> : <Restaurants restaurants={data.restaurants} />}
    </>
  );
};

export default RestaurantsContainer;
