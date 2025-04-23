import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '././Redux Practice/store'; // adjust path if needed
import App from './App';

test('renders the Set 50 button', () => {
  console.log("✅ RUNNING UPDATED TEST IN CI");
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const button = screen.getByText(/Set 50/i);
  expect(button).toBeInTheDocument();
});
