import React, { useState, useEffect, useContext, useCallback } from "react";
import "./Home.scss";
import { Input, AutoComplete, Modal } from "antd";
import Button from "../../../Components/UI/Button/Button";
import axios from "axios";
import { TestApiUrls } from "../../../config/testApiUrls";
import LeafletMap from "../LeafletMap/LeafletMap";
import useDebounce from "../../../hooks/useDebounce";
import { isEmptyObject } from "../../../utils/helperFunctions"
import { OrderContext } from "../../../contexts/OrderContext";
import _ from "lodash";

import banner1 from "../../../assets/home-banners/marshmallow-banner-img-1.webp";
import banner2 from "../../../assets/home-banners/marshamallow-banner-img-2.webp";

const { Option } = AutoComplete;

const Home = () => {
  const [result, setResult] = useState([]); // {boundingbox: array, display_name: string, importance: number, lat: string, licence: string, lon}
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState({}); // {boundingbox: array, display_name: string, importance: number, lat: string, licence: string, lon}
  const [apiResponseError, setApiResponseError] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmModalLoading, setConfirmModalLoading] = useState(false);
  const [deliveryAddressLongLang, setDeliveryAddressLongLang] = useState([]);
  const [deliveryAddress, setDeliveryAddress] = useState(""); //{address_name: string, postalCode: number}
  const orderContext = useContext(OrderContext);
  const { setOrderDeliveryAddress } = orderContext;

  const debouncedInputValue = useDebounce(inputValue, 800);

  // todo
  //ask for browserLocations and then set lan long based on that, otherwise search location from input/map

  const fetchData = () => {
    axios
      .get(TestApiUrls.searchLocationsGet(inputValue))
      .then(res => {
        setResult(
          res.data.map(elem => {
            return {
              display_name: elem.display_name,
              lat: elem.lat,
              lon: elem.lon
            };
          })
        );
        // setSelected({});
      })
      .catch(err => {
        console.log(err);
        setResult([]);
        setSelected({});
        setApiResponseError("Ups there was an error geting data");
      });
  };

  useEffect(() => {
    if (debouncedInputValue) {
      console.log("useEffect debouncedInputValue", debouncedInputValue)
      fetchData();
    }
  }, [debouncedInputValue])

  useEffect(() => {
    if (deliveryAddressLongLang) {
      axios
        .get(TestApiUrls.locationReverseGeocoding(deliveryAddressLongLang))
        .then(res => {
          console.log("deliveryAddress", res.data);
          setDeliveryAddress({
            addressName: res.data.display_name,
            postalCode: res.data.address.postcode
          });
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [deliveryAddressLongLang]);

  const handleSearchClick = () => {
    console.log("handleSearchClick");
  };
  const handleOnChange = value => {
    if (value === "") {
      setSelected({});
      setResult([]);
      setApiResponseError("");
      setInputValue(value);
      setDeliveryAddress("");
      setDeliveryAddressLongLang([]);
    }
    //use case when clear input-value is clicked, value is undefined
    if (value === undefined) {
      setSelected({});
      setResult([]);
      setApiResponseError("");
      setInputValue("");
      setDeliveryAddress({});
      setDeliveryAddressLongLang([]);
    }

    if (value !== undefined && value !== "") {
      setInputValue(value);
      setResult([]);
    }
  };
  const handleOnSelect = (value, option) => {
    const selectedObject = result.find(elem => elem.display_name === value);
    setSelected(selectedObject);
    setDeliveryAddressLongLang([selectedObject.lat, selectedObject.lon]);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const handleOkModal = () => {
    setConfirmModalLoading(true);
    setTimeout(() => {
      setModalVisible(false);
      setOrderDeliveryAddress(deliveryAddress);
      setConfirmModalLoading(false);
    }, 300);
  };

  const handleCancelModal = () => {
    console.log("clicked cancel button");
    setSelected({});
    setResult([]);
    setApiResponseError("");
    setInputValue("");
    setDeliveryAddress({});
    setDeliveryAddressLongLang([]);
    setModalVisible(false);
  };

  const handleDeliveryAddressChange = langLong => {
    setDeliveryAddressLongLang(langLong);
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
            filterOption={true}
            style={{
              width: 500,
              zIndex: 1
            }}
            //onSearch={handleSearch}
            onChange={handleOnChange}
            onSelect={handleOnSelect}
            onClear={() => console.log("OnCancel")}
            placeholder="Enter your location"
            allowClear={true}
            notFoundContent={apiResponseError !== "" ? apiResponseError : ""}
          >
            {result &&
              result.map((elem, id) => (
                <Option key={elem.display_name + id} value={elem.display_name}>
                  {elem.display_name}
                </Option>
              ))}
          </AutoComplete>
          <button
            disabled={isEmptyObject(selected)}
            className={["ant-btn ant-btn-primary"]}
            onClick={showModal}
          >
            Let's go
          </button>
        </div>
      </div>
      <Modal
        title="Select delivery address"
        visible={modalVisible}
        onOk={handleOkModal}
        confirmLoading={confirmModalLoading}
        onCancel={handleCancelModal}
        style={{ height: "500px" }}
        centered
      >
        <LeafletMap
          latLon={deliveryAddressLongLang}
          handleDeliveryAddressChange={handleDeliveryAddressChange}
        />
        <div>Delivery address: {deliveryAddress.addressName}</div>
      </Modal>
    </div>
  );
};

export default Home;
