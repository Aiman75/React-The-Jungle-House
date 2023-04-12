import { render, screen } from '@testing-library/react';
import {App, Description} from './App';

test('renders learn react link', () => {
  render(<App />);
  render(<Description />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
