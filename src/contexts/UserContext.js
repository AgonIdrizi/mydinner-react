import React, { createContext, useState } from "react";
import { withRouter } from "react-router-dom";

const actionTypes = {
  login: 'login',
  signup: 'signup',
  logout: 'logout'
}

export const UserContext = createContext();
UserContext.displayName = "UserContext";

function userReducer(state, action) {
  switch (action.type) {
    case actionTypes.login: {
      return {
        user: action.payload
      };
    }
    case actionTypes.signup: {
      return {
        user: action.payload
      };
    }
    case actionTypes.logout: {
      return {
        user: null
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const UserContextProvider = props => {
  const [state, dispatch] = React.useReducer(userReducer, {
    user: null
  });

  const value = [state, dispatch];

  return (
    <UserContext.Provider value={value}>{props.children}</UserContext.Provider>
  );
};

function useUser() {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

function loginUser(dispatch, user) {
  dispatch({ type: actionTypes.login, payload: user });
}

function singupUser(dispatch, user) {
  dispatch({ type: actionTypes.signup, payload: user });
}
function logoutUser(dispatch) {
  dispatch({ type: actionTypes.logout });
}

export { UserContextProvider, useUser, loginUser, singupUser, logoutUser };
