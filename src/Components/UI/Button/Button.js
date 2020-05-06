import React from 'react';
import { Button as AntButton } from "antd";
import "antd/es/button/style/index.css";
import "./Button.scss";

const Button = ({ text, type, size }) => {
  return (
    <div class="button">
      <AntButton style={{background: "#f56a00", borderColor: '#d75000'}} type={type} size={size}>
        {text}
      </AntButton>
    </div>
  );
};

export default Button;
