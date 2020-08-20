import React from 'react';
import { Checkbox } from "antd";
import "./Filter.scss";

const Filter = (props) => {
  const onChange= (value) => {
    props.onCheckBoxClickHandle(value)
    console.log(value)
  }
  return (
    <div className="Filters">
      {props.filterByCuisine.map(elem => (
        <div className="Checkbox">
          <Checkbox onChange={() => onChange(elem.restaurantType)}>{elem[0]}</Checkbox>
          <span>{elem[1]}</span>
        </div>
      ))}
    </div>
  );
}

export default Filter;
