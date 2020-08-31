import React from 'react';
import { Checkbox } from "antd";
import "./Filter.scss";

const Filter = ({filterByCuisine, onCheckBoxClickHandler}) => {
  const onChange= (value) => {
    onCheckBoxClickHandler(value)
    console.log(value)
  }
  return (
    <div className="Filters">
      {Object.entries(filterByCuisine).map(elem => (
        <div className="Checkbox">
          <Checkbox onChange={() => onChange(elem[0])}>{elem[0]}</Checkbox>
          <span>{elem[1]}</span>
        </div>
      ))}
    </div>
  );
}

export default Filter;
