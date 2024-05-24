import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

test('Calculator performs addition correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  fireEvent.click(getByText('2'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByText('3'));
  fireEvent.click(getByText('='));
  expect(getByText('15')).toBeInTheDocument();
});

test('Calculator performs subtraction correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('9'));
  fireEvent.click(getByText('0'));
  fireEvent.click(getByText('-'));
  fireEvent.click(getByText('5'));
  fireEvent.click(getByText('0'));
  fireEvent.click(getByText('='));
  expect(getByText('40')).toBeInTheDocument();
});

test('Calculator performs multiplication correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('6'));
  fireEvent.click(getByText('*'));
  fireEvent.click(getByText('7'));
  fireEvent.click(getByText('='));
  expect(getByText('42')).toBeInTheDocument();
});

test('Calculator performs division correctly', () => {
  const { getByText } = render(<Calculator />);
  fireEvent.click(getByText('8'));
  fireEvent.click(getByText('÷'));
  fireEvent.click(getByText('4'));
  fireEvent.click(getByText('='));
  expect(getByText('4')).toBeInTheDocument();
});

test('Calculator displays ERROR for results greater than 999999999', async () => {
  const { getByTestId, getByText } = render(<Calculator />);

  fireEvent.click(getByTestId('button-9'));
  fireEvent.click(getByTestId('button-9'));
  fireEvent.click(getByTestId('button-9'));
  fireEvent.click(getByTestId('button-9'));
  fireEvent.click(getByTestId('button-9'));
  fireEvent.click(getByTestId('button-9'));
  fireEvent.click(getByTestId('button-9'));
  fireEvent.click(getByTestId('button-9'));
  fireEvent.click(getByTestId('button-9'));
  fireEvent.click(getByText('+'));
  fireEvent.click(getByTestId('button-1'));
  fireEvent.click(getByText('='));

  expect(getByText('ERROR')).toBeInTheDocument();
});
