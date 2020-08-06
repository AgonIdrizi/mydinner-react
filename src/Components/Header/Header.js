import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Menu, Dropdown } from "antd";
import "antd/es/menu/style/index";
import "antd/es/dropdown/style/index";
import "./Header.scss";

import { DownOutlined } from "@ant-design/icons";



const Header = () => {
  const context = useContext(UserContext);
  const { user, onUserLogOutHandler } = context;

  const menu = (
    <Menu>
      <Menu.Item key="0">
        <Link to="/profile">Profile</Link>
      </Menu.Item>
      <Menu.Item key="1">
        <a onClick={ e => onUserLogOutHandler(e)} type="link">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="Header">
      <div className="NavContent">
        <h2>Food IN</h2>
        <ul>
          <li>
            <Link to="/all-restaurants">All Restaurants</Link>
          </li>
          {user == null ? (
            <li>
              <Link to="/login">Login</Link>
            </li>
          ) : (
            <li>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a
                  className="ant-dropdown-link"
                  onClick={e => e.preventDefault()}
                >
                  Account <DownOutlined />
                </a>
              </Dropdown>
            </li>
          )}
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
