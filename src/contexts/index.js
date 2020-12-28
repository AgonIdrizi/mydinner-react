import React from "react";
import CartContextProvider from "./CartContext";
import { UserContextProvider } from "./UserContext";
import {OrderContextProvider} from "./OrderContext";

const ContextProviders = ({ component }) => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <OrderContextProvider>{component}</OrderContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
};
export default ContextProviders;
