import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Plutone from '../Plutone/index';

afterEach(cleanup);

it('show shapes', () => {
  const { getByTestId } = render(<Plutone />);
  const shardAmount = getByTestId('plutoneContainer');
  expect(shardAmount.children.length).toBe(8);
  //   console.log(shardAmount);
});
