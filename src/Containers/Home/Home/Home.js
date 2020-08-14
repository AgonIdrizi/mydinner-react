import React, { useState, useEffect } from "react";
import "./Home.scss";
import { Input, AutoComplete, Modal } from "antd";
import Button from "../../../Components/UI/Button/Button";
import axios from "axios";
import {TestApiUrls} from "../../../config/testApiUrls"
import LeafletMap from "../LeafletMap/LeafletMap"

import banner1 from "../../../assets/home-banners/marshmallow-banner-img-1.webp";
import banner2 from "../../../assets/home-banners/marshamallow-banner-img-2.webp";

const { Option } = AutoComplete;

const Home = () => {
  const [result, setResult] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState("");
  const [apiResponseError, setApiResponseError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmModalLoading, setConfirmModalLoading] = useState(false);
  const [deliveryAddressLongLang, setDeliveryAddressLongLang] = useState([])

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

          setApiResponseError("Ups there was an error geting data")
        });
    }
  }, [inputValue]);

  const handleSearchClick = () => {
    console.log("handleSearchClick");
  };
  const handleOnChange = value => {
    if (value === "" || value === undefined) {
      setSelected("");
      setResult([]);
      setApiResponseError("")
    }
    setInputValue(value);
  };
  const handleOnSelect = (value, option) => {
    setSelected(value);
    console.log(value);
  };

  const showModal = () => {
    setModalVisible(true)
  }

  const handleOkModal = () => {
    setConfirmModalLoading(true);
    setTimeout(() => {
      setModalVisible(false);
      setConfirmModalLoading(false)
    }, 2000)
  }

  const handleCancelModal = () => {
    console.log("clicked cancel button");
    setModalVisible(false)
  }

  const handleDeliveryAddressChange = (langLong) => {
    setDeliveryAddressLongLang(langLong)
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
            {result.map(elem => (
              <Option key={elem} value={elem}>
                {elem}
              </Option>
            ))}
          </AutoComplete>
          <button
            className={["ant-btn ant-btn-primary"]}
            onClick={showModal}
          >
            Let's go
          </button>
        </div>
      </div>
      <Modal
        title="Select delivery adress"
        visible={modalVisible}
        onOk={handleOkModal}
        confirmLoading={confirmModalLoading}
        onCancel={handleCancelModal}
        style={{height: '500px'}}
        centered
      >
        <LeafletMap handleDeliveryAddressChange={handleDeliveryAddressChange} />
        {deliveryAddressLongLang && <div>delivery address {deliveryAddressLongLang}</div>}
      </Modal>
    </div>
  );
};

export default Home;
