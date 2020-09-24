import React, { useContext } from 'react';
import Cart from "./Cart/Cart";
import { OrderContext } from '../../contexts/OrderContext';

const CartContainer = () => {
  const { restaurantSelected, orderDeliveryAddress } = useContext(OrderContext)
  const breadCrumbItems = [
    {breadcrumbName:'Home', path:"/"}, 
    {breadcrumbName: `${orderDeliveryAddress.city != undefined ? orderDeliveryAddress.city :'Location'}`, path: `${orderDeliveryAddress.city ? 'restaurants/'+orderDeliveryAddress.city : 'all-restaurants'}`}, 
    {breadcrumbName:'Restaurant', path: `/restaurant/${restaurantSelected}`}, 
    {breadcrumbName: 'Checkout'}
  ]
  return <Cart breadCrumbItems={breadCrumbItems} />;
}

export default CartContainer;
