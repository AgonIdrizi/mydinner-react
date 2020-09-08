import React from 'react';
import Cart from "./Cart/Cart";

const CartContainer = () => {
  const breadCrumbItems = [
    {breadcrumbName:'Home', path:"/"}, 
    {breadcrumbName: 'Location', path: "restaurants/location"}, 
    {breadcrumbName:'Restaurant', path: '/restaurant/18'}, 
    {breadcrumbName: 'Checkout'}
  ]
  return <Cart breadCrumbItems={breadCrumbItems} />;
}

export default CartContainer;
