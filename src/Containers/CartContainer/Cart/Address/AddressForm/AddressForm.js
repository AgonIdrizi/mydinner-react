import React from "react";
import * as yup from "yup";
import { Formik, Form, Field } from "formik";
import { TextFormField } from "../../../../../Components/UI/TextFormFields/TextFormField/TextFormField";
import ErrorMessage from "../../../../../Components/UI/ErrorMessage/ErrorMessage";
import { useToasts } from "react-toast-notifications";
import { Button } from "antd";
import { BUTTON_TYPES } from "../../../../../Components/UI/Button/Button";

const schema = yup.object({
  full_address: yup.string().required(),
  city: yup.string().required(),
  postal_code: yup.string().required()
});

const AddressForm = ({state, setState, orderDeliveryAddress, setOrderDeliveryAddress }) => {
  const { addToast } = useToasts();

  const onSaveButtonClickHandler = values => {
    const updateAddress = async data => {
      setState({ ...state, isLoadingOnSave: true });
      await new Promise(r =>
        setTimeout(r => {
          addToast("Address was updated succesfully", {
            appearance: "success",
            autoDismiss: true
          });
          const newAddress = {
            addressName: data.full_address,
            city: data.city,
            postalCode: data.postal_code
          };
          setState({ isLoadingOnSave: false, isEditMode: false });
          setOrderDeliveryAddress(newAddress);
        }, 500)
      );
      return data;
    };
    updateAddress(values);
  };

  const buttonLoadingProp = state.isLoadingOnSave ? { loading: "Loading" } : {};
  const inputFieldDisabledProp = state.isLoadingOnSave
    ? { disabled: "disabled" }
    : null;

  return (
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
  );
};

export default AddressForm;
