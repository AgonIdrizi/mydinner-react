import React from 'react';
import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import '@testing-library/jest-dom';
import { OrderContext } from "../../../contexts/OrderContext";
import Restaurant from './Restaurant';
import { mockedJsons} from '../../../config/mockedJsons'
import userEvent from '@testing-library/user-event';

afterEach(cleanup)

const mockStore = configureStore([]);
const store = mockStore({
  CardReducer: {
    proceedToCheckout: false,
    itemsInCart: [],
    totalAmount: 0
  }
});
const component = (
  <Provider store={store}>
    <BrowserRouter>
      <OrderContext.Provider value={{ setRestaurantSelected: jest.fn() }}>
        <Restaurant
          canAddItems={true}
          cartItems={[]}
          resData={mockedJsons.restaurant}
        />
      </OrderContext.Provider>
    </BrowserRouter>
  </Provider>
)

it('renders', () => {
  const { container } = render(component);
  expect(container.firstChild).toHaveTextContent("Tivoli")
})

it('searches menus', () => {
  const { container, getByPlaceholderText } = render(component);
  const searchInput = getByPlaceholderText('input search text')
  const menusDiv = document.querySelector('.Menus');

  userEvent.type(searchInput, 'ha');

  expect(menusDiv.children.length).toBe(2);

  userEvent.clear(searchInput);
  userEvent.type(searchInput, 'piz');

  expect(menusDiv.children.length).toBe(13);
})

it('filters menus by categories', () => {
  const { container, getByTestId } = render(component);
  const burgersButton = getByTestId('burgers')
  const menusDiv = document.querySelector('.Menus');

  userEvent.click(burgersButton);

  expect(menusDiv.children.length).toBe(3);
})