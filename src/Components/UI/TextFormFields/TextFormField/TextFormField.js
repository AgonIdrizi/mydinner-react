import React from "react";
import { Input } from "antd";
import "antd/es/input/style/index.css";
import "./TextFormField.scss";

export const TextFormField = ({ field, ...props }) => {
  return (
    <div className="input-row">
      <Input {...field} {...props} />
    </div>
  );
};
