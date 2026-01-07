import { render, screen } from '@testing-library/react';
import App from './App.tsx';

test('Renders application title', () => {
  render(<App />);
  expect(screen.getByText('Taskivate')).toBeInTheDocument();
});
