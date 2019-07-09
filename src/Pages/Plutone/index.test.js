import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Plutone from './index';

afterEach(cleanup);

it('Display instrument shapes', () => {
  const { container } = render(<Plutone />);
  expect(container.children.length).toBe(7);
  //   console.log(shardAmount);
});
