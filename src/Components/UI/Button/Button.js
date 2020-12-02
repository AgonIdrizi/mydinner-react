import React from "react";
import { Button as AntButton } from "antd";
import "antd/es/button/style/index.css";
import "./Button.scss";

export const BUTTON_TYPES = {
  primary: { background: "#f56a00", borderColor: "#d75000" },
  confirm: { backgroundColor: "#00a53c", color: "white" },
  neutral: { backgroundColor: "transparetn", color: "#9E9E9E" }
};

const Button = ({ style, text, type, size }) => {
  return (
    <div class="button">
      <AntButton
        style={{ background: "#f56a00", borderColor: "#d75000" }}
        type={type}
        size={size}
      >
        {text}
      </AntButton>
    </div>
  );
};

export default Button;
