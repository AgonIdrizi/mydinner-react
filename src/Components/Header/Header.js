import React from "react";
import {Link} from 'react-router-dom';
import "./Header.scss";
const Header = () => {
  return (
    <header className="Header">
      <div className="NavContent">
        <h2>Food IN</h2>
        <ul>
          <li><Link to="/all-restaurants" >All Restaurants</Link></li>
          <li><Link to="/login" >Login</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
