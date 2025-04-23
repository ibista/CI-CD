import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './Redux Practice/store'; // ✅ adjust path if store is not in ./store
import App from './App';

test('renders Set 50 button', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const setButton = screen.getByText(/Set 50/i);
  expect(setButton).toBeInTheDocument();
});
