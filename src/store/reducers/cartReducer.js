import * as actionTypes from '../actions/actionTypes';

const initialState = {
  proceedToCheckout: false,
  itemsInCart: [],
  totalAmount: 0
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CHECKOUT:
      return {
        ...state,
        proceedTocheckout: !state.proceedTocheckout
      }
    case actionTypes.ADD_TO_CART:
      if (typeof action.payload == "string") {
        const newitem = state.itemsInCart.find(elem => elem.name === action.payload);
        const updatedItems = [...state.itemsInCart, newitem]
        const updatedTotalAmount = (state.totalAmount + newitem.price);
          return {
            ...state,
            itemsInCart: [...updatedItems],
            totalAmount: updatedTotalAmount
          }
      }
        return {
          ...state,
          itemsInCart: [...state.itemsInCart, action.payload],
          totalAmount: state.totalAmount + action.payload.price
        }
  }
  return {...state};
}

export default reducer;