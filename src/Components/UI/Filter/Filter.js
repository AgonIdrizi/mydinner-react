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
      {props.filterArray.map(elem => (
        <div className="Checkbox">
          <Checkbox onChange={() => onChange(elem.restaurantType)}>{elem.restaurantType}</Checkbox>
          <span>{elem.count}</span>
        </div>
      ))}
    </div>
  );
}

export default Filter;
