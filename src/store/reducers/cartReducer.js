import * as actionTypes from '../actions/actionTypes';

const initialState = {
  proceedToCheckout: false,
  itemsInCart: [],
  totalAmount: 0,
  showClearCartModal: false
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
    case actionTypes.REMOVE_FROM_CART:
      let indexOfObject = state.itemsInCart.findIndex(elem => elem.name === action.payload);
      let itemToDelete = state.itemsInCart.find(elem => elem.name === action.payload);
      state.itemsInCart.splice(indexOfObject, 1)
      return {
        ...state,
        itemsInCart: [...state.itemsInCart],
        totalAmount: state.totalAmount - itemToDelete.price
      }
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        itemsInCart: [],
        totalAmount: 0
      }
    case actionTypes.SHOW_CLEAR_CART_MODAL:
      return {
        ...state,
        showClearCartModal: action.payload
      }
  }
  return {...state};
}

export default reducer;