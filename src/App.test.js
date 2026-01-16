import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders CI/CD Demo title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CI\/CD Demo Application/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('counter increments correctly', () => {
    render(<App />);
    const incrementButton = screen.getByText('Increment');
    const counterDisplay = screen.getByText(/Counter: 0/i);
    
    fireEvent.click(incrementButton);
    expect(counterDisplay).toHaveTextContent('Counter: 1');
  });

  test('counter decrements correctly', () => {
    render(<App />);
    const decrementButton = screen.getByText('Decrement');
    const counterDisplay = screen.getByText(/Counter: 0/i);
    
    fireEvent.click(decrementButton);
    expect(counterDisplay).toHaveTextContent('Counter: -1');
  });

  test('adds new item to list', () => {
    render(<App />);
    const input = screen.getByPlaceholderText('Enter new item');
    const addButton = screen.getByText('Add Item');
    
    fireEvent.change(input, { target: { value: 'Test Item' } });
    fireEvent.click(addButton);
    
    expect(screen.getByText('Test Item')).toBeInTheDocument();
  });
});