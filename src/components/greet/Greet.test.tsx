import { render, screen } from '@testing-library/react';
import { Greet } from './Greet';

test('Greet renders correctly', () => {
  // Creating virtual dom via render() for test purposes
  render(<Greet />);
  // global screen object
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
})

test('Greet renders correctly with a name', () => {
  // Creating virtual dom via render() for test purposes
  render(<Greet name='Tayfur' />);
  // global screen object
  const textElement = screen.getByText(/hello tayfur/i);
  expect(textElement).toBeInTheDocument();
})