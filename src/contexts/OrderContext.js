import React, { createContext, useState } from "react";
import { withRouter } from "react-router-dom";

export const OrderContext = createContext();

const OrderContextProvider = props => {
  const [orderDeliveryAddress, setOrderDeliveryAddress] = useState({});
  const [restaurantSelected, setRestaurantSelected] = useState(4);
  return (
    <OrderContext.Provider value={{ orderDeliveryAddress, setOrderDeliveryAddress, restaurantSelected, setRestaurantSelected }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default withRouter(OrderContextProvider);
