import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import SignUp from "./SignUp";
import { UserContext } from "../../../contexts/UserContext";

afterEach(cleanup);

const component = (
  <BrowserRouter>
    <UserContext.Provider value={{ onSignUpHandler: jest.fn() }}>
      <SignUp />
    </UserContext.Provider>
  </BrowserRouter>
);

it("renders SignUp", () => {
  const { container } = render(component);

  expect(container).toHaveTextContent("Sign Up");
});

it("shows error when username is not filled", async () => {
  const { container, getByPlaceholderText } = render(component);

  const userNameInput = getByPlaceholderText("Username");
  fireEvent.blur(userNameInput);

  await waitFor(() => {
    expect(container).toHaveTextContent("username is a required field");
  });
});

it("shows error when username is less than 3 characters", async () => {
  const { container, getByPlaceholderText } = render(component);

  const userNameInput = getByPlaceholderText("Username");
  userEvent.type(userNameInput, "ag");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent(
      "username must be at least 3 characters"
    );
  });
});

it("shows error when email input field is empty", async () => {
  const { container, getByPlaceholderText } = render(component);

  const emailInput = getByPlaceholderText("Email");
  userEvent.type(emailInput, "");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent("email is a required field");
  });
});

it("shows error when email input field is not email-format", async () => {
  const { container, getByPlaceholderText } = render(component);

  const emailInput = getByPlaceholderText("Email");
  userEvent.type(emailInput, "asdd#df.com");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent("email must be a valid email");
  });
});

it("shows error when email input field is not email-format", async () => {
  const { container, getByPlaceholderText } = render(component);

  const emailInput = getByPlaceholderText("Email");
  userEvent.type(emailInput, "ds@sdf,com");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent("email must be a valid email");
  });
});

it("shows error when password input field is empty", async () => {
  const { container, getByPlaceholderText } = render(component);

  const passwordInput = getByPlaceholderText("Password");
  userEvent.type(passwordInput, "");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent("No password provided.");
  });
});

it("shows error when password input field is shorter than 8 chars", async () => {
  const { container, getByPlaceholderText } = render(component);

  const passwordInput = getByPlaceholderText("Password");
  userEvent.type(passwordInput, "12345");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent(
      "Password is too short - should be 8 chars minimum."
    );
  });
});

it("shows error when password input field must contain chars.", async () => {
  const { container, getByPlaceholderText } = render(component);

  const passwordInput = getByPlaceholderText("Password");
  userEvent.type(passwordInput, "12345678");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent("Password must be alphanumeric.");
  });
});

it("shows error when password confirm input field is empty", async () => {
  const { container, getByPlaceholderText } = render(component);

  const passwordInput = getByPlaceholderText("Password");
  const passwordConfirmationInput = getByPlaceholderText(
    "Password confirmation"
  );
  userEvent.type(passwordInput, "1234567u");
  userEvent.type(passwordConfirmationInput, "");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent("Password confirm is required");
  });
});

it("shows error when password confirm and password input field are not the same", async () => {
  const { container, getByPlaceholderText } = render(component);

  const passwordInput = getByPlaceholderText("Password");
  const passwordConfirmationInput = getByPlaceholderText(
    "Password confirmation"
  );
  userEvent.type(passwordInput, "1234567u");
  userEvent.type(passwordConfirmationInput, "ssdf");

  fireEvent.submit(container.querySelector("form"));

  await waitFor(() => {
    expect(container).toHaveTextContent("Password must match");
  });
});
