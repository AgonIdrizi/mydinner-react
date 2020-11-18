import React from "react";
import { Card } from "antd";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "../../../../Components/UI/TextFormFields/TextFormField/TextFormField";
import ErrorMessage from "../../../../Components/UI/ErrorMessage/ErrorMessage";
import { useToasts } from "react-toast-notifications";
import { isEmptyObject } from "../../../../utils/helperFunctions";
import { Button } from "antd";
import { BUTTON_TYPES } from "../../../../Components/UI/Button/Button";
import useAddress from "../../../../hooks/useAddress";

const schema = yup.object({
  full_address: yup.string().required(),
  city: yup.string().required(),
  postal_code: yup.string().required()
});

const Address = ({ orderDeliveryAddress, setOrderDeliveryAddress }) => {
  const [isEditMode, setIsEditMode] = React.useState(false);
  const [isLoadingOnSave, setIsLoadingOnSave] = React.useState(false);
  const { addToast } = useToasts();

  const onEditButtonClickHandler = () => {
    console.log("button click");
    setIsEditMode(!isEditMode);
  };

  const onSaveButtonClickHandler = values => {
    console.log("btton Save click", values);

    const updateAddress = async data => {
      setIsLoadingOnSave(true);
      await new Promise(r =>
        setTimeout(r => {
          setIsLoadingOnSave(false);
          addToast("Address was updated succesfully", {
            appearance: "success",
            autoDismiss: true
          });
          setOrderDeliveryAddress(data)
        }, 500)
      );
      return data;
    };
    updateAddress(values);
  };
  const buttonLoadingProp = isLoadingOnSave ? { loading: "Loading" } : {};
  const inputFieldDisabledProp = isLoadingOnSave
    ? { disabled: "disabled" }
    : null;
  return (
    <div className="Address">
      {isEmptyObject(orderDeliveryAddress) ? null : (
        <div className="site-card-border-less-wrapper">
          <Card
            title={<h2>Address</h2>}
            bordered={false}
            style={{ width: 500 }}
          >
            {isEditMode ? (
              <Formik
                validationSchema={schema}
                initialValues={{
                  full_address: orderDeliveryAddress.addressName,
                  city: orderDeliveryAddress.city,
                  postal_code: orderDeliveryAddress.postalCode
                }}
                onSubmit={values => onSaveButtonClickHandler(values)}
              >
                {(values, isValid, touched, errors) => (
                  <Form>
                    <Field
                      label="Full Address"
                      name="full_address"
                      placeholder="Full Address"
                      component={TextFormField}
                      {...inputFieldDisabledProp}
                    />
                    <ErrorMessage name="full_address" />
                    <Field
                      label="City"
                      name="city"
                      placeholder="City"
                      component={TextFormField}
                      {...inputFieldDisabledProp}
                    />
                    <ErrorMessage name="city" />
                    <Field
                      label="Postal Code"
                      name="postal_code"
                      placeholder="Postal Code"
                      component={TextFormField}
                      {...inputFieldDisabledProp}
                    />
                    <ErrorMessage name="postal_code" />
                    <Button
                      style={BUTTON_TYPES.confirm}
                      type="submit"
                      onClick={() => onSaveButtonClickHandler(values.values)}
                      {...buttonLoadingProp}
                    >
                      Save
                    </Button>
                  </Form>
                )}
              </Formik>
            ) : (
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
            )}
          </Card>
        </div>
      )}
    </div>
  );
};

export default Address;
