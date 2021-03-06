import React from 'react';
import { Link  } from 'react-router-dom'
import { Breadcrumb } from 'antd';

const BreadCrumb = ({ items }) => {
  const lastIndex = items.lastIndexOf(items[items.length - 1])
  return (
    <Breadcrumb separator=">">
      {items.map((breadcrumb, idx) => (
        idx !== lastIndex ? 
          <Breadcrumb.Item key={breadcrumb.breadcrumbName + idx}><Link to={breadcrumb.path}>{breadcrumb.breadcrumbName}</Link></Breadcrumb.Item> 
         : 
          <Breadcrumb.Item key={breadcrumb.breadcrumbName + idx}>{breadcrumb.breadcrumbName}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
}

export default BreadCrumb;