import React from 'react';
import { render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom'
import Footer from './Footer';

afterEach(cleanup);

it("renders", () => {
  const { asFragment } = render(<Footer />);
  expect(asFragment()).toMatchSnapshot();
});

it("inserts text in h2", () => {
  const { getByText } = render(<Footer />);
  expect(getByText("Footer")).toHaveTextContent("Footer");
})