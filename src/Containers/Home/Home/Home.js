import React, { useState } from "react";
import "./Home.scss";
import { Input, AutoComplete } from "antd";
import Button from "../../../Components/UI/Button/Button";

import banner1 from "../../../assets/home-banners/marshmallow-banner-img-1.webp";
import banner2 from "../../../assets/home-banners/marshamallow-banner-img-2.webp";

const { Option } = AutoComplete;

const Home = () => {
  const [result, setResult] = useState([]);
  const [selected, setSelected] = useState()

  const handleSearch = value => {
    let res = [];

    if (!value || value.indexOf("@") >= 0) {
      res = [];
    } else {
      res = ["gmail.com", "163.com", "qq.com"].map(
        domain => `${value}@${domain}`
      );
    }
    setResult(res);
  };
  const handleSearchClick = () => {
    console.log("handleSearchClick")
  }
  const handleOnChange = value => {
    setSelected(value)
  }
  const handleOnSelect = (value, option) => {
    setSelected(value)
    console.log(value)
  }
  return (
    <div className="HomeContainer">
      <div className="HomeImage">
        <img className="ImgBanner1" src={banner1} alt="My dinner home page" />
        <img className="ImgBanner2" src={banner2} alt="My dinner home page" />
      </div>
      <div className="HomeSearchInput">
        <h1>Order Food online</h1>
        <div className="SearchActions">
          <AutoComplete
            value={selected}
            style={{
              width: 500,
              zIndex: 1
            }}
            onSearch={handleSearch}
            onChange={handleOnChange}
            onSelect={handleOnSelect}
            placeholder="Enter your location"
            allowClear={true}
          >
            {result.map(email => (
              <Option key={email} value={email}>
                {email}
              </Option>
            ))}
          </AutoComplete>
          <button className={["ant-btn ant-btn-primary"]} onClick={handleSearchClick} >Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
