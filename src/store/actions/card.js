import * as actionTypes from "./actionTypes";

export const checkout = () => {
  return {
    type: actionTypes.CHECKOUT
  };
};

export const addToCart = value => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: value
  };
};

export const removeFromCart = value => {
  return {
    type: actionTypes.REMOVE_FROM_CART,
    payload: value
  };
};

export const clearCart = () => {
  return {
    type: actionTypes.CLEAR_CART
  };
};

export const showClearCartModal = value => {
  return {
    type: actionTypes.SHOW_CLEAR_CART_MODAL,
    payload: value
  };
};