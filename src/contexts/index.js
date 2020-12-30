import React from "react";
import CartContextProvider from "./CartContext";
import { UserContextProvider } from "./UserContext";
import {OrderContextProvider} from "./OrderContext";

const ContextProviders = ({ children }) => {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <OrderContextProvider>{children}</OrderContextProvider>
      </CartContextProvider>
    </UserContextProvider>
  );
};
export default ContextProviders;
