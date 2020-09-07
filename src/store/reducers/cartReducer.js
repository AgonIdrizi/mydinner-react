import * as actionTypes from '../actions/actionTypes';

const initialState = {
  proceedToCheckout: false
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.CHECKOUT:
      return {
        proceedTocheckout: !state.proceedTocheckout
      }
  }
  return state;
}

export default reducer;