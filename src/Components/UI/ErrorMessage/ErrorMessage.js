import React from "react";

import "./ErrorMessage.scss";

export const ErrorMessage = ({ errorText }) => {
  return <p className="errorMsg">{errorText}</p>;
};
