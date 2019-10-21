import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PropTypes from "prop-types";
import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default Layout;
