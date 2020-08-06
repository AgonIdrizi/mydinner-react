import React, { createContext, useState } from "react";

export const UserContext = createContext();

const UserContextProvider = props => {
  const [user, setUser] = useState(null);

  const onUserLoginHandler = user => {
    console.log("onUserLoginHadler", user)
    // async call to backend
    setUser(user);
    // redirect to homepage
  }
  const onUserSignUpHandler = user => {
    console.log("onUserLoginHadler", user)
    // async call to backend
    setUser(user);
    //redirect to homepage
  }

  const onUserLogOutHandler = (e) => {
    e.preventDefault()
    setUser(null);
    // go to homepage
  }

  return (
    <UserContext.Provider
    value={{user, onUserLoginHandler, onUserSignUpHandler, onUserLogOutHandler}}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;