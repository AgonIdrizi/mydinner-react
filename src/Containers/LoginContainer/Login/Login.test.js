import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import Login from "./Login";
import { UserContext } from "../../../contexts/UserContext";
import { ItalicOutlined } from "@ant-design/icons";

afterEach(cleanup);

const component = (
  <BrowserRouter>
    <UserContext.Provider value={{ onLoginHandler: jest.fn() }}>
      <Login />
    </UserContext.Provider>
  </BrowserRouter>
);

it("renders", () => {
  const { container, getByText } = render(
    <BrowserRouter>
      <UserContext.Provider value={{ onLoginHandler: jest.fn() }}>
        <Login />
      </UserContext.Provider>
    </BrowserRouter>
  );
  expect(container.firstChild).toHaveClass("Login");
});

it("fills inputs with values from user", () => {
  const { container, getByPlaceholderText } = render(component);
  const userNameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");
  userEvent.type(userNameInput, "agon");
  userEvent.type(passwordInput, "123456");

  expect(userNameInput.value).toBe("agon");
  expect(passwordInput.value).toBe("123456");
});

it("shows error messages when username input is empty", async () => {
  const {
    container,
    getByText,
    rerender,
    getByPlaceholderText,
    findByTestId,
    getByTestId
  } = render(component);
  const userNameInput = getByPlaceholderText("Username");

  fireEvent.blur(userNameInput);

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent("username is a required field");
  });
});

it("shows error messages when username input is less than 3 characters", async () => {
  const {
    container,
    getByText,
    rerender,
    getByPlaceholderText,
    findByTestId,
    getByTestId
  } = render(component);
  const userNameInput = getByPlaceholderText("Username");

  userEvent.type(userNameInput, "ag");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent(
      "username must be at least 3 characters"
    );
  });
});

it("shows error messages when password input is too short", async () => {
  const {
    container,
    getByText,
    rerender,
    getByPlaceholderText,
    findByTestId,
    getByTestId
  } = render(component);
  const userNameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");

  userEvent.type(userNameInput, "agon");
  userEvent.type(passwordInput, "123");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent(
      "Password is too short - should be 8 chars minimum."
    );
  });
});

it("shows error messages when password input is not alphanumeric", async () => {
  const {
    container,
    getByText,
    rerender,
    getByPlaceholderText,
    findByTestId,
    getByTestId
  } = render(component);
  const userNameInput = getByPlaceholderText("Username");
  const passwordInput = getByPlaceholderText("Password");

  userEvent.type(userNameInput, "agon");
  userEvent.type(passwordInput, "12345678");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent(
      "Password must be alphanumeric."
    );
  });
});