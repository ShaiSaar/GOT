import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import theme from '../themes';
import Cards, { Props } from './Cards';
import { StoreProvider } from '../state/store';
import { MOCK_CHARACTERS } from '../mock/characters';

const ThemeAndStoreWrapper = ({characters}: Props) =>(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <Cards characters={characters} />
    </StoreProvider>
  </ThemeProvider>
)

describe('Testing Cards component with characters',() => {
  it('Should show 6 characters', async () => {
    render(<ThemeAndStoreWrapper characters={MOCK_CHARACTERS} />);
  
    const characterElement = await screen.findAllByTestId(/character-/i)
    expect(characterElement.length).toBe(6)
  })

  it('Should show 0 characters', async () => {
    render(<ThemeAndStoreWrapper characters={[]} />);
  
    const characterElement = screen.queryAllByTestId(/character-/i)
    expect(characterElement.length).toBe(0)
  })
  
})
