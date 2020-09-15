import React from "react";
import {
  render,
  screen,
  cleanup,
  fireEvent,
  getByText
} from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Restaurants from "./Restaurants";
import { mockedJsons } from "../../../config/mockedJsons";
import userEvent from "@testing-library/user-event";

const component = (
  <BrowserRouter>
    <Restaurants restaurants={mockedJsons.restaurants} />
  </BrowserRouter>
);

afterEach(cleanup);

it("renders", () => {
  render(component);
  expect(screen.getByText("Restaurants")).toBeInTheDocument();
});

it("sorts restaurants by Newest", () => {
  const { container } = render(component);
  expect(screen.getByText("Tastyyy")).toBeInTheDocument();
  const restaurantsDiv = container.querySelector(".AllRestaurants");
  expect(restaurantsDiv.childNodes[0]).toHaveTextContent("Tastyyy");
});

it("sorts restaurants by A to Z", () => {
  const { container, getByText } = render(component);
  const button = getByText("A to Z");
  fireEvent.click(button);

  const restaurantsDiv = container.querySelector(".AllRestaurants");
  expect(restaurantsDiv.childNodes[0]).toHaveTextContent("3 Fenera");
  expect(restaurantsDiv.childNodes[1]).toHaveTextContent("Africa safari");
});

// there is no fixed order for min. order restaurants, need to find solution for testing
xit("sorts restaurants by minimum order amount", () => {
  const { container, getByText } = render(component);
  const button = getByText("Min. Order Amount");
  fireEvent.click(button);

  const restaurantsDiv = container.querySelector(".AllRestaurants");
  console.log(restaurantsDiv.childNodes[0].textContent);
  expect(restaurantsDiv.childNodes[0]).toHaveTextContent("3 Fenera");
  expect(restaurantsDiv.childNodes[1]).toHaveTextContent("Bffs");
});

it("sorts restaurants by fastest delivery", () => {
  const { container, getByText } = render(component);
  const button = getByText("Fastest Delivery");
  fireEvent.click(button);

  const restaurantsDiv = container.querySelector(".AllRestaurants");

  expect(restaurantsDiv.childNodes[0]).toHaveTextContent("3 Fenera");
  expect(restaurantsDiv.childNodes[1]).toHaveTextContent("Star stuff");
});

it("searches restaurants", () => {
  const { container, getByPlaceholderText } = render(component);
  const searchInput = getByPlaceholderText("input search text");
  userEvent.type(searchInput, "ta");

  const restaurantsDiv = container.querySelector(".AllRestaurants");

  expect(restaurantsDiv.childNodes[0]).toHaveTextContent("Tastyyy");
  expect(restaurantsDiv.childNodes[1]).toHaveTextContent("Star stuff");
});


it("filters restaurants by sandwich checkbox", () => {
  const { container, getByTestId } = render(component);
  const sandwichesCheckbox = screen.getByTestId("Sandwiches");

  const restaurantsDiv = container.querySelector(".AllRestaurants");

  expect(sandwichesCheckbox.checked).toEqual(false);
  fireEvent.click(sandwichesCheckbox);

  expect(sandwichesCheckbox.checked).toEqual(true);
  expect(restaurantsDiv.children.length).toBe(6);
});

it("updates restaurants when sandwiches checkbox is clicked and search input is given", () => {
  const { container, getByTestId, getByPlaceholderText } = render(component);
  const sandwichesCheckbox = screen.getByTestId("Sandwiches");
  const searchInput = getByPlaceholderText("input search text");
  const restaurantsDiv = container.querySelector(".AllRestaurants");

  expect(sandwichesCheckbox.checked).toEqual(false);
  fireEvent.click(sandwichesCheckbox);

  userEvent.type(searchInput, "ta");

  expect(sandwichesCheckbox.checked).toEqual(true);
  expect(restaurantsDiv.children.length).toBe(2);
});

it("filters restaurants by burger checkbox", () => {
  const { container, getByTestId } = render(component);
  const burgerCheckbox = screen.getByTestId("Burgers");

  const restaurantsDiv = container.querySelector(".AllRestaurants");

  expect(burgerCheckbox.checked).toEqual(false);
  fireEvent.click(burgerCheckbox);

  expect(burgerCheckbox.checked).toEqual(true);
  expect(restaurantsDiv.children.length).toBe(6);
});

it("updates restaurants when burger checkbox is clicked and search input is given", () => {
  const { container, getByTestId, getByPlaceholderText } = render(component);
  const burgerCheckbox = screen.getByTestId("Burgers");
  const searchInput = getByPlaceholderText("input search text");
  const restaurantsDiv = container.querySelector(".AllRestaurants");

  expect(burgerCheckbox.checked).toEqual(false);
  fireEvent.click(burgerCheckbox);

  userEvent.type(searchInput, "g");

  expect(burgerCheckbox.checked).toEqual(true);
  expect(restaurantsDiv.children.length).toBe(2);
});

it("filters restaurants by healthy checkbox", () => {
  const { container, getByTestId } = render(component);
  const healthyCheckbox = screen.getByTestId("Healthy");

  const restaurantsDiv = container.querySelector(".AllRestaurants");

  expect(healthyCheckbox.checked).toEqual(false);
  fireEvent.click(healthyCheckbox);

  expect(healthyCheckbox.checked).toEqual(true);
  expect(restaurantsDiv.children.length).toBe(2);
});

it("updates restaurants when healthy checkbox is clicked and search input is given", () => {
  const { container, getByTestId, getByPlaceholderText } = render(component);
  const healthyCheckbox = screen.getByTestId("Healthy");
  const searchInput = getByPlaceholderText("input search text");
  const restaurantsDiv = container.querySelector(".AllRestaurants");

  expect(healthyCheckbox.checked).toEqual(false);
  fireEvent.click(healthyCheckbox);

  userEvent.type(searchInput, "t");

  expect(healthyCheckbox.checked).toEqual(true);
  expect(restaurantsDiv.children.length).toBe(1);
});

it("filters restaurants by dessert checkbox", () => {
  const { container, getByTestId } = render(component);
  const dessertCheckbox = screen.getByTestId("Desserts");

  const restaurantsDiv = container.querySelector(".AllRestaurants");

  expect(dessertCheckbox.checked).toEqual(false);
  fireEvent.click(dessertCheckbox);

  expect(dessertCheckbox.checked).toEqual(true);
  expect(restaurantsDiv.children.length).toBe(2);
});