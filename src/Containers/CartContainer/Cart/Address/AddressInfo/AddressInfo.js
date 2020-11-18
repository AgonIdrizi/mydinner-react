import React from "react";
import { Button } from "antd";
import { BUTTON_TYPES } from "../../../../../Components/UI/Button/Button";

const AddressInfo = ({state, setState, orderDeliveryAddress }) => {

  const onEditButtonClickHandler = () => {
    setState({ ...state, isEditMode: !state.isEditMode });
  };

  return (
    <>
      <p>
        <span className="span-card-title">Full Address:</span>{" "}
        {orderDeliveryAddress.addressName}
      </p>
      <p>
        <span className="span-card-title">City:</span>{" "}
        {orderDeliveryAddress.city}
      </p>
      <p>
        <span className="span-card-title">Postal Code:</span>{" "}
        {orderDeliveryAddress.postalCode}
      </p>
      <Button
        style={BUTTON_TYPES.confirm}
        type="submit"
        onClick={onEditButtonClickHandler}
      >
        Edit
      </Button>
    </>
  );
};

export default AddressInfo;
