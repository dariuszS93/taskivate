import { render, screen } from '@testing-library/react';
import App from './App.tsx';

test('', () => {
  render(<App />);
  expect(screen.getByText('Taskivate')).toBeInTheDocument();
});
