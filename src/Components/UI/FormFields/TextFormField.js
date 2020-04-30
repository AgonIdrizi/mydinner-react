import { FieldProps, getIn } from "formik";
import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import React from "react";

import { Input } from "antd";
import "antd/es/input/style/index.css";

export const TextFormField = ({ field, form, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  return (
    <>
      <ErrorMessage errorText={errorText} />
      <Input error={!!errorText} {...field} {...props} />
    </>
  );
};
