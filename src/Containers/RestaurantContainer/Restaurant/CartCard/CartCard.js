import React, {useContext} from "react";
import "./CartCard.scss";
import { CartContext } from "../../../../contexts/CartContext";

const CartCard = () => {
  const agon = useContext(CartContext)
  console.log("agon", agon)
  return (
    <div className="CartCard">
      <h2>Cart</h2>
    </div>
  );
};

export default CartCard;
