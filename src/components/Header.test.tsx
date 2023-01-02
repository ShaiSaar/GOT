import { render, screen } from '@testing-library/react';
import Header from './Header'

it('render Header component with title Game Of Thrones', () => {
  render(<Header />);

  const titleElement = screen.getByText('Game Of Thrones');
  expect(titleElement).toBeInTheDocument();
})