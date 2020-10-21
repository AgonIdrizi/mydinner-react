import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { Menu, Dropdown } from "antd";
import CartIcon from "../UI/Icons/CartIcon/CartIcon";
import { motion } from "framer-motion";
import "antd/es/menu/style/index.css";
import "antd/es/dropdown/style/index.css";
import "./Header.scss";
import Logo from "../../assets/logo.png";

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
        <a onClick={e => onUserLogOutHandler(e)} type="link">
          Logout
        </a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="Header">
      <motion.div
        className="NavContent"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
      >
        <h2>
          <Link to="/">
            <img src={Logo} alt="Food In"></img>
          </Link>
        </h2>
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
            <Link to="/cart">
              <CartIcon />
            </Link>
          </li>
        </ul>
      </motion.div>
    </header>
  );
};

export default Header;
