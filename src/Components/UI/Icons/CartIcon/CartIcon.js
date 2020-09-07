import React from 'react';
import { ShoppingCartOutlined } from "@ant-design/icons";
import "./CartIcon.scss"

const CartIcon = () => {
  return (
    <div className="cartIcon">
      <ShoppingCartOutlined  />
      <div style={{borderRadius: '50%', backgroundColor: 'black'}}>2</div>
    </div>
    
  );
}

export default CartIcon;
