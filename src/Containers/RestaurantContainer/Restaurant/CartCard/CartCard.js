import React, {useContext} from "react";
import "./CartCard.scss";
import { CartContext } from "../../../../contexts/CartContext";

const CartCard = () => {
  const context = useContext(CartContext)
  const { itemsInCart } = context;
  console.log("agon", itemsInCart)
  return (
    <div className="CartCard">
      <h2>Cart</h2>
      <p>{itemsInCart.length}</p>
    </div>
  );
};

export default CartCard;
