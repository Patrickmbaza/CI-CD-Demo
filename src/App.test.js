import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders CI/CD Demo title', () => {
  render(<App />);
  const titleElement = screen.getByText(/CI\/CD Pipeline Demo/i);
  expect(titleElement).toBeInTheDocument();
});

test('counter increments when clicked', () => {
  render(<App />);
  const button = screen.getByText(/Increment/i);
  const counter = screen.getByText(/Count: 0/i);
  
  fireEvent.click(button);
  expect(counter).toHaveTextContent('Count: 1');
});

test('renders deployment info', () => {
  render(<App />);
  const infoElement = screen.getByText(/Auto-deployed via GitHub Actions/i);
  expect(infoElement).toBeInTheDocument();
});