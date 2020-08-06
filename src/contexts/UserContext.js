import React, { createContext, useState } from "react";
import {withRouter} from "react-router-dom";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [user, setUser] = useState(null);

  const onUserLoginHandler = user => {
    console.log("onUserLoginHadler", user)
    // async call to backend
    setUser(user);
    // redirect to homepage
    props.history.push('/')
  }
  const onUserSignUpHandler = user => {
    console.log("onUserLoginHadler", user)
    // async call to backend
    setUser(user);

    //redirect to homepage
    props.history.push('/')
  }

  const onUserLogOutHandler = (e) => {
    e.preventDefault();
    setUser(null);
    // go to homepage
    props.history.push('/')
  }

  return (
    <UserContext.Provider
    value={{user, onUserLoginHandler, onUserSignUpHandler, onUserLogOutHandler}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default withRouter(UserContextProvider);