import React, { createContext, useState } from "react";
import { withRouter } from "react-router-dom";

export const OrderContext = createContext();

const OrderContextProvider = props => {
  const [orderDeliveryAddress, setOrderDeliveryAddress] = useState({});
  return (
    <OrderContext.Provider value={{ orderDeliveryAddress, setOrderDeliveryAddress }}>
      {props.children}
    </OrderContext.Provider>
  );
};

export default withRouter(OrderContextProvider);
