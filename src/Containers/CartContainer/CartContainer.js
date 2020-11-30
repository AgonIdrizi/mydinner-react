import React, { useContext } from "react";
import Cart from "./Cart/Cart";
import { OrderContext } from "../../contexts/OrderContext";
import Spinner from "../../Components/UI/Spinner/Spinner";
import useDataApi from "../../hooks/useDataApi";
import { TestApiUrls } from "../../config/testApiUrls";
import useRestaurant from "../../hooks/useRestaurant";

const CartContainer = () => {
  const { restaurantSelected, orderDeliveryAddress } = useContext(OrderContext);
  //here we request menus of restaurantSelected
  const restaurantQuery = useRestaurant(restaurantSelected, "restaurant");

  const breadCrumbItems = [
    { breadcrumbName: "Home", path: "/" },
    {
      breadcrumbName: `${
        orderDeliveryAddress.city != undefined
          ? orderDeliveryAddress.city
          : "Location"
      }`,
      path: `${
        orderDeliveryAddress.city
          ? "restaurants/" + orderDeliveryAddress.city
          : "all-restaurants"
      }`
    },
    {
      breadcrumbName: "Restaurant",
      path: `/restaurants/${restaurantSelected}`
    },
    { breadcrumbName: "Checkout" }
  ];
  return (
    <>
      {restaurantQuery.isLoading ? (
        <Spinner />
      ) : (
        <Cart
          breadCrumbItems={breadCrumbItems}
          resData={restaurantQuery.data.data.restaurant}
        />
      )}
    </>
  );
};

export default CartContainer;
