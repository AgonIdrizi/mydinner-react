import React from "react";
import { Input } from "antd";
import "antd/es/input/style/index.css";
import "./TextFormField.scss";

export const TextFormField = ({ field, ...props }) => {
  const { name } = field;
  if (name === 'password' || name === 'password_confirmation') {
    return (
      <div className="input-row">
        <Input.Password {...field} {...props} />
      </div>
    );
  }
  return (
    <div className="input-row">
      <Input {...field} {...props} />
    </div>
  );
};
