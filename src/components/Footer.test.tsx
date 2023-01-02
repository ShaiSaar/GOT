import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import Footer, { Props } from './Footer'
import { StoreProvider } from '../state/store';
import theme from '../themes';

const mockGetNextPage = jest.fn();

const ThemeAndStoreWrapper = ({disabled, getNextPage}: Props) =>(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <Footer disabled={disabled} getNextPage={getNextPage}/>
    </StoreProvider>
  </ThemeProvider>
)

it('render Footer component with disabled true', () => {
  render(<ThemeAndStoreWrapper disabled={true} getNextPage={mockGetNextPage}/>);

  const buttonElement = screen.getByText('More');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).toBeDisabled();
})

it('render Footer component with disabled false', () => {
  render(<ThemeAndStoreWrapper disabled={false} getNextPage={mockGetNextPage}/>);

  const buttonElement = screen.getByText('More');
  expect(buttonElement).toBeInTheDocument();
  expect(buttonElement).not.toBeDisabled();
})