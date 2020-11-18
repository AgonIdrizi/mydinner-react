import React, { createContext, useState } from "react";
import { withRouter } from "react-router-dom";

export const OrderContext = createContext();

const testAddress = {
  addressName: "Hotel Lirak, Marshal Tito St, Tetovo, Municipality of Tetovo, Polog Region, 1200, Macedonia",
  city: "Tetovo",
  postalCode: "1200"
}

const OrderContextProvider = props => {
  const [orderDeliveryAddress, setOrderDeliveryAddress] = useState(testAddress);
  const [restaurantSelected, setRestaurantSelected] = useState(4);
  return (
    <OrderContext.Provider value={{ orderDeliveryAddress, setOrderDeliveryAddress, restaurantSelected, setRestaurantSelected }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default withRouter(OrderContextProvider);
