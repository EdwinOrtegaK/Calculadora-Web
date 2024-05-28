import React from 'react';
import { render } from '@testing-library/react';
import Display from '../components/Display';

test('Display shows the correct history and current value', () => {
  const { getByText } = render(<Display history="123 + 456" currentValue="789" />);

  expect(getByText('123 + 456')).toBeInTheDocument();
  expect(getByText('789')).toBeInTheDocument();
});
