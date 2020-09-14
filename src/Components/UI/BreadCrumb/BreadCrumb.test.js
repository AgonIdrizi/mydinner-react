import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import { BrowserRouter } from 'react-router-dom';
import BreadCrumb from './BreadCrumb';

const breadCrumbItems = [
  {breadcrumbName:'Home', path:"/"}, 
  {breadcrumbName: 'Location', path: "restaurants/location"}, 
  {breadcrumbName:'Restaurant', path: '/restaurant/18'}, 
  {breadcrumbName: 'Checkout'}
]

it ("renders breadCrumb", () => {
  render(<BrowserRouter><BreadCrumb items={breadCrumbItems} /></BrowserRouter>)

  expect(screen.getByText("Home")).toBeInTheDocument();
})