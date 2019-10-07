import React from "react";
import "./Header.scss";
const Header = () => {
  return (
    <header className="Header">
      <div className="NavContent">
        <h2>Food IN</h2>
        <ul>
          <li>All Restaurants</li>
          <li>Login</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
