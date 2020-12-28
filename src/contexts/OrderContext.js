import React, { createContext, useState } from "react";

export const OrderContext = createContext();

const testAddress = {
  addressName:
    "Hotel Lirak, Marshal Tito St, Tetovo, Municipality of Tetovo, Polog Region, 1200, Macedonia",
  city: "Tetovo",
  postalCode: "1200"
};

const OrderContextProvider = props => {
  const [orderDeliveryAddress, setOrderDeliveryAddress] = useState(testAddress);
  const [restaurantSelected, setRestaurantSelected] = useState(4);
  return (
    <OrderContext.Provider
      value={{
        orderDeliveryAddress,
        setOrderDeliveryAddress,
        restaurantSelected,
        setRestaurantSelected
      }}
    >
      {props.children}
    </OrderContext.Provider>
  );
};

function useOrderContext() {
  const context = React.useContext(OrderContext);
  if (context === undefined) {
    throw new Error(`useOrderContext must be used within an Order provider`);
  }
  return context;
}

export { useOrderContext, OrderContextProvider };
