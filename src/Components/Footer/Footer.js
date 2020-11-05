import React from "react";
import { Link } from 'react-router-dom'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons';
import "./Footer.scss";
const Footer = () => {
  return (
    <div className="Footer">
      <h2>My Dinner</h2>
      <div className="FooterInfos">
        <div className="ContactPages">
          <Link to="/about" >About us</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="SocialIcons">
          <span>Follow us: </span>
          <FacebookOutlined style={{ fontSize: 24 }} />
          <InstagramOutlined style={{ fontSize: 24 }} />
          <TwitterOutlined style={{ fontSize: 24 }} />
          <YoutubeOutlined style={{ fontSize: 24 }} />
        </div>
      </div>
      <h4>©2020 MyDinner</h4>
    </div>
  );
};

export default Footer;
