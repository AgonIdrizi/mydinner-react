import { FieldProps, getIn } from "formik";
import React from "react";

import { Input } from "antd";
import 'antd/es/input/style/index.css';

export const TextFormField = ({ field, form, ...props }) => {
  const errorText =
    getIn(form.touched, field.name) && getIn(form.errors, field.name);
  console.log(errorText);
  return <><p>{errorText}</p><Input error={!!errorText} {...field} {...props} /></>;
};
