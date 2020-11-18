import React from "react";
import { Card } from "antd";
import { isEmptyObject } from "../../../../utils/helperFunctions";
import AddressForm from "./AddressForm/AddressForm";
import AddressInfo from "./AddressInfo/AddressInfo";

const Address = ({ orderDeliveryAddress, setOrderDeliveryAddress }) => {
  const [state, setState] = React.useState({
    isEditMode: false,
    isLoadingOnSave: false
  });

  return (
    <div className="Address">
      {isEmptyObject(orderDeliveryAddress) ? null : (
        <div className="site-card-border-less-wrapper">
          <Card
            title={<h2>Address</h2>}
            bordered={false}
            style={{ width: 500 }}
          >
            {state.isEditMode ? (
              <AddressForm
                state={state}
                setState={setState}
                orderDeliveryAddress={orderDeliveryAddress}
                setOrderDeliveryAddress={setOrderDeliveryAddress}
              />
            ) : (
              <AddressInfo
                state={state}
                setState={setState}
                orderDeliveryAddress={orderDeliveryAddress}
              />
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default Address;
