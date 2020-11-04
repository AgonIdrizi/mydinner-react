import React from 'react';
import './HomeTextMarketing.scss'

const HomeTextMarketing = ({heading, className, description}) => {
  return (
    <div className={`HomeTextMarketing ${className}`}>
      <h2>{heading}</h2>
      <p>{description}</p>
    </div>
  );
}

export default HomeTextMarketing;
