import React from "react";
import useDataApi from "../../hooks/useDataApi";
import Restaurant from "./Restaurant/Restaurant";
import Spinner from "../../Components/UI/Spinner/Spinner";
import { TestApiUrls } from "../../config/testApiUrls";

const RestaurantContainer = () => {
  const [{ data, isLoading, isError }, doFetch] = useDataApi(
    TestApiUrls.restaurantGet
  );

  return (
    <>{isLoading ? <Spinner /> : <Restaurant resData={data.restaurant} />} </>
  );
};
export default RestaurantContainer;
