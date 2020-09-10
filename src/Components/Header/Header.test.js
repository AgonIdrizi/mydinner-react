import React from 'react';
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom';
import {BrowserRouter}  from 'react-router-dom';
import Header from './Header';
import { UserContext } from '../../contexts/UserContext';

it("shows login when user is null", () => {
  const { getByText } = render(
    <BrowserRouter>
      <UserContext.Provider value={{ user: null }}>
        <Header />
      </UserContext.Provider>
    </BrowserRouter>
  );
  getByText("Login")
})

it("doesn't show login when user is not null", () => {
  const { getByText } = render(
    <BrowserRouter>
      <UserContext.Provider
        value={{ user: { username: "Agon", password: "123456abc" } }}
      >
        <Header />
      </UserContext.Provider>
    </BrowserRouter>
  );
  getByText("Account");
})