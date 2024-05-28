import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '../components/Button';

test('Button renders with the correct value and responds to click', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button value="7" onClick={handleClick} />);

  const button = getByText('7');
  expect(button).toBeInTheDocument();

  fireEvent.click(button);
  expect(handleClick).toHaveBeenCalledTimes(1);
  expect(handleClick).toHaveBeenCalledWith('7');
});
