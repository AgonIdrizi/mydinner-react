import * as React from 'react';
import { act } from 'react-dom/test-utils';
import {render, screen, waitForElementToBeRemoved} from './../../test/test-utils';
import RestaurantContainer from './RestaurantContainer';

it('renders', async () => {

  render(<RestaurantContainer />)

  //await waitForElementToBeRemoved(() => screen.getByLabelText(/loading/i))
  const loading = screen.getByLabelText(/loading/i)
  screen.debug()
  expect(1).toBe(1)
})