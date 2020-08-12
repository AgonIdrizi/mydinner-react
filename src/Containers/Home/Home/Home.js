import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Input, AutoComplete, Dropdown } from "antd";
import Button from "../../../Components/UI/Button/Button";
import axios from "axios";
import {TestApiUrls} from "../../../config/testApiUrls"

import banner1 from "../../../assets/home-banners/marshmallow-banner-img-1.webp";
import banner2 from "../../../assets/home-banners/marshamallow-banner-img-2.webp";

const { Option } = AutoComplete;

const Home = () => {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [apiResponseError, setApiResponseError] = useState("")

  useEffect(() => {
    if (inputValue !== "") {
      axios
        .get(TestApiUrls.searchLocationsGet(inputValue))
        .then(res => {
          console.log(res);
          setResult(res.data.map(elem => elem.display_name));
          setSelected("");
        })
        .catch(err => {
          console.log(err)
          if (inputValue === "") return;
          setApiResponseError("Ups there was an error geting data")
        });
    }
  }, [inputValue]);

  const handleSearchClick = () => {
    console.log("handleSearchClick");
  };
  const handleOnChange = value => {
    if (value === "") {
      setSelected("");
      setResult([]);
    }
    setInputValue(value);
  };
  const handleOnSelect = (value, option) => {
    setSelected(value);
    console.log(value);
  };
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
            value={inputValue}
            style={{
              width: 500,
              zIndex: 1
            }}
            //onSearch={handleSearch}
            onChange={handleOnChange}
            onSelect={handleOnSelect}
            placeholder="Enter your location"
            allowClear={true}
            notFoundContent={apiResponseError !="" ? apiResponseError: ""}
          >
            {(apiResponseError =="") && result.map(elem => (
              <Option key={elem} value={elem}>
                {elem}
              </Option>
            ))}
          </AutoComplete>
          <button
            className={["ant-btn ant-btn-primary"]}
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
