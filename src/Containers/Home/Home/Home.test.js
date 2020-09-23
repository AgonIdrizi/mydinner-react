import React from "react";
import { BrowserRouter } from "react-router-dom";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  waitFor
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { OrderContext } from "../../../contexts/OrderContext";
import axiosMock from "axios";
import userEvent from "@testing-library/user-event";
import Home from "./Home";

jest.mock("axios");

afterEach(cleanup);

const component = (
  <BrowserRouter>
    <OrderContext.Provider value={{ setRestaurantSelected: jest.fn() }}>
      <Home />
    </OrderContext.Provider>
  </BrowserRouter>
);
describe("Home", () => {
  beforeEach(() => {
    axiosMock.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: { display_name: "Tetovo", lat: "24.000", lon: "42.000" }
      })
    );
    axiosMock.get.mockImplementationOnce(() =>
      Promise.resolve({
        data: {
          addressName: "Gostivarska 26",
          city: "Tetovo",
          postalCode: 1200
        }
      })
    );
  });

  it("renders", () => {
    const { container } = render(component);

    expect(container.firstChild).toHaveTextContent("Order Food online");
  });

  it("button is disabled", () => {
    const { container, getByText } = render(component);
    const letsGoButton = getByText("Let's go");
    expect(letsGoButton).toBeDisabled();
  });
});
